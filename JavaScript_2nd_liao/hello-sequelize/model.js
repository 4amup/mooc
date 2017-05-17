const fs = require('fs');
const db = require('./db');

let files = fs.readdirSync(__dirname + '/models');

let js_files = files.filter((f) => {
    return f.endsWith('.js');
}, files);

module.exports = {};

// 这个是核心输出的exports内容
for(let f of js_files) {
    console.log(`import model from files ${f}...`);
    let name = f.substring(0, f.length-3); // -3就是把.js去掉了
    module.exports[name] =  require(__dirname + '/models/' + f);
}

// 再附加一个sync属性，在db自定义模块里，sync是sequelize的一个API
module.exports.sync = () => {
    return db.sync();
}