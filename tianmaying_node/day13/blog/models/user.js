// 用户模型的定义
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 以下这段代码是创建Schema的过程
var UserSchema = new Schema({
    username: {type: String, index: {unique: true}},
    password: String,
    avatar: {
        type: String,
        default: '/images/default-avatar.jpeg'
    },
    title: {
        type: String,
        default: '未命名博客'
    },
    description: {
        type: String,
        default: '博主很懒，还没有添加任何描述……'
    }
});
// 将上面创建的Schema创建为Model，并作为变量导出
module.exports = mongoose.model('User', UserSchema);
