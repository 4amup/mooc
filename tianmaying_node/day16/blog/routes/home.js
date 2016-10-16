/**
 * Created by harttle on 15/4/14.
 */

var authRequired = require('../utils/auth-required');
var User = require('../models/user.js');
var router = require('express').Router();

router.get('/', function(req, res, next) {
    User.find({}, function (err, users) {
        if (err) return next(err);
        res.render('home/index', {
            users: users,
            title: 'TMY BLOG: 一个简单的博客系统'
        });
    });
});

router.get('/home', authRequired, function (req, res, next) {
    res.redirect('/');
});

module.exports = router;
