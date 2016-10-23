var passport = require('passport');
var router = require('express').Router();
var mailer = require('../utils/mailer');
var User = require('../models/user');
var crypto = require('crypto');
var fs = require('fs');
var config = require('../config');

router.route('/register')
    .get(function(req, res) {
        res.render('account/register', {title: '注册'});
    })
    .post(function(req, res, next) {
        User.register(new User({username: req.body.username}), req.body.password,
            function (err, user) {
                if (err)
                    return res.status(400).send(err.message || '未知原因');

                crypto.randomBytes(20, function (err, buf) {
                    user.activeToken = user._id + buf.toString('hex');
                    user.activeExpires = Date.now() + 24 * 3600 * 1000;   // 24 hour

                    var link = config.schema + config.host + ':' + config.port + '/account/active/' + user.activeToken;
                    mailer.send({
                        to: req.body.username,
                        subject: '欢迎注册 TEST BLOG',
                        html: '请点击 <a href="' + link + '">此处</a> 激活。' + '\n' + '<p>' + link + '</p>'
                    });

                    user.save(function(err, user){
                        if(err) return next(err);
                        res.send('已发送邮件至' + user.username + '，请在24小时内按照邮件提示激活。');
                    });
                });
            });
    });

router.route('/login')
    .get(function (req, res) {
        res.render('account/login', {title: '登录'});
    })
    .post(passport.authenticate('local'), function (req, res, next) {
        res.end();
    });

router.get('/active/:activeToken', function (req, res, next) {
    User.findOne({
        activeToken: req.params.activeToken,
        activeExpires: {$gt: Date.now()}
    }, function (err, user) {
        if (err) return next(err);
        if (!user) {
            return res.render('message', {
                title: '激活失败',
                content: '您的激活链接无效，请重新 <a href="/account/signup">注册</a>'
            });
        }

        user.active = true;
        user.save(function (err, user) {
            if (err) return next(err);

            fs.readFile(process.cwd() + '/data/demo.md', function (err, data) {
                if (err) return next(err);
                Post.create({
                    title: '欢迎使用TMY博客',
                    content: data,
                    author: user.id
                });
            });

            res.render('message', {
                title: '激活成功',
                content: user.username + '已成功激活，请前往 <a href="/account/login">登录</a>'
            });
        });
    });
});

module.exports = router;
