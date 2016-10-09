var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.route('/register')
  // 返回注册页面
  .get(function(req, res) {
    res.render('account/register', {title: '注册'});
  })
  // 接受用户表单
  .post(function(req, res, next) {
    var username = req.body.username || '',
        password = req.body.password || '';

    if(username.length === 0 || password.length === 0){
      return res.status(400).end('用户名或密码不合法');
    }

    // 将来要在这里检查用户名是否存在，数据库的内容，现在先设为true

    User.create({username: username, password: password},
      function(err, user){
        if(err){
          return next(err);
        }
        res.status(201).end('注册成功');
      });
  });

module.exports = router;