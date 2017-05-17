const Sequelize = require('sequelize');

const uuid = require('uuid'); // 现在uuid已经替代了廖雪峰教程中的node-uuid

const config = require('./config');

console.log('init sequelize...');

function generateId() {
    return uuid.v4();
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const ID_TYPE = Sequelize.STRING(50); // 通用的一个属性数据类型设置

function defineModel(name, attributes) {
    var attrs = {};
    for(let key in attributes) {
        let value = attributes[key];
        if(typeof value === 'object' && value['type']){ // 先判断这个值是否是对象，值还拥有一个type的属性
            value.allowNull = value.allowNull || false; // 不允许为空
            attrs[key] = value;
        } else {
            attrs[key] = { // 如果这个值不是个对象的话，就是普通的一个值
                type: value, // 直接正常设置就行了
                allowNull: false // 还是不允许为空
            }
        }
    }
    // 再加一个通用的键
    attrs.id = {
        type: ID_TYPE,
        primaryKey: true
    };
    attrs.createdAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.UpdatedAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    // 经历过以上步骤后attrs = {}已经变成一个对象了，下面解析这个对象
    // 把这个定义的model显示出来
    // 稍微写一个stringify（系列化）的用法第一个参数是值，第二个函数就是为了处理第一个系列化后的每个对象，第三个是分隔符
    console.log('model defined for table:' + name + '\n' + JSON.stringify(attrs, function (k, v) {
        if(k === 'type') {
            for(let key in Sequelize) {
                if(key === 'ABSTRACT' || key === 'NUMBER') {
                    continue;
                    // 遇到这两个属性名就不显示了，直接continue跳过
                }
                let dbType = Sequelize[key];
                if(typeof dbType === 'function') {
                    if(v instanceof dbType) {
                        if(v._length) {
                            return `${dbType.key}(${v._length})`;
                        }
                        return dbType.key;
                    }
                    if(v === dbType) {
                        return dbType.key;
                    }
                }
            }
        }
        return v;
    }, '  '));
    // 返回一个model实例
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: { // hooks是一个包含钩子函数的对象，这些函数会在生命周期内某些事件发生之前或之后被调用
            beforeValidate: function(obj) { // 验证（validate）前调用这个函数，为共有的键设置值
                let now = new Date();
                if(obj.isNewRecord) { // 根据是否是newRecord决定是否设置主键
                    console.log('will create entity...' + obj);
                    if(!obj.id) {
                        obj.id = generateId();
                    }
                    obj.createdAt = now;
                    obj.UpdatedAt = now;
                    obj.version = 0;
                } else {
                    obj.UpdatedAt = Date.now();
                    obj.version++;
                }
            }
        }
    });
}

const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];

var exp = { // 模块传出去的变量要用var定义
    defineModel: defineModel,
    sync: () => {
        // 这个只允许在非产品环境下create
        if(process.env.NODE_ENV !== 'production') {
            console.log('db.js - sync() called');
            return sequelize.sync({force: true}); // sequelize提供的API——sync https://itbilu.com/nodejs/npm/VkYIaRPz-.html#api-instance-sync
            // 设置为 true，会在创建表前先删除原表，即：DROP TABLE IF EXISTS ...
        } else {
            throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.');
        }
    }
};

for (let type of TYPES) {
    exp[type] = Sequelize[type];
}

exp.ID = ID_TYPE;
exp.generateId = generateId;

module.exports = exp;