var express = require('express');
var User = require('../models/user'); //引用Model构造函数
var router = express.Router();

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
          User.find({username: username}, function(err, user){
            // if(err) return;
            console.log(username, '已经存在');
          })
          // 将来在这里执行用户名和密码的储存
          // 这里的User是Model，使用create方法新增一条数据
          User.create({username: username, password: password},
            function(err, user) {
              if (err) return next(err); //交给接下来的错误处理中间件
              res.status(201).end('注册成功');
            });        
      });

module.exports = router;