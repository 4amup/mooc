/**
 * Created by harttle on 15/4/14.
 */
var router = require('express').Router();
var Post = require('../models/post.js');
var authRequired = require('../utils/auth-required');
var User = require('../models/user.js');
// require('mongoose-query-paginate');


router.get('/', function(req, res, next) {
    User.find({}, function (err, users) {
        if (err) return next(err);
        res.render('home/index', {
            users: users,
            title: 'TEST BLOG: 一个简单的博客系统'
        });
    });
});

router.route('/post/:id')
    .get(function(req, res, next) {
        Post.findById(req.params.id)
            .populate('author')
            .exec(function(err, post) {
                if(err) return next(err);

                res.render('home/post', {
                    post: post,
                    title: post.title,
                    author: post.author
                });
            });
    });

module.exports = router;
