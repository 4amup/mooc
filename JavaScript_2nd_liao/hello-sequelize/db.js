const Sequelize = require('sequelize');

console.log('init sequelize...');

var sequelize = new Sequelize('dbname', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const ID_TYPE = Sequelize.STRING(50); // 通用的一个属性设置

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
    }
    attrs.createdAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    }
    attrs.UpdatedAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    }
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    }
    // 返回一个实例
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: { // hooks如何用不太了解
            beforeValidate: function(obj) {
                let now = new Date();
                if(obj.isNewRecord) {
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

module.exports = defineModel;