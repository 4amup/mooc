var router = require('express').Router();

// 暂时定义一个user
var user = {
  id: 1,
  username: 'lixiaochun',
  title: 'lixiaochun 的博客',
  description: '随便写写',
  avatar: '/images/default-avatar.jpeg'
};

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', {
    users: [user, user, user],
    title: '博客首页——一个简单的博客系统'
  });
});

module.exports = router;
