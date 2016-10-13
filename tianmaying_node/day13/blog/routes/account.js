var router = require('express').Router();
var User = require('../models/user'); //引用Model构造函数
var passport = require('passport');

// route方法用于创建链式路由
router.route('/register')
      // 返回注册页面
      .get(function(req, res){
          res.render('account/register', {title: '注册'});
      })
      // 接受用户表单
      .post(function(req, res, next){
          var username = req.body.username || '',
              password = req.body.password || '';

          if(username.length === 0 || password.length === 0){
            return res.status(400).end('用户名或密码不合法');
          }
          // 这里的register方法是插件添加的，调用后对密码加密，并将密码密文等储存为一个User对象
          User.register(new User({ username: username}), req.body.password, function(err, user) {
            if(err) {
              return res.status(400).send(err.message || '未知原因');
            }
            res.status(201).end('注册成功');
          });
      });

// 登录
router.route('/login')
      .get(function(req, res) {
        res.render('account/login', {title: '登录'});
      })
      .post(passport.authenticate('local'), function(req, res, next) {
        res.end();
      });

module.exports = router;