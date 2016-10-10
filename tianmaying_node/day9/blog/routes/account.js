var express = require('express');
var router = express.Router();

router.get('/login', function(req, res){
  return res.send('这里将会是登录页面');
});
router.get('/register', function(req, res){
  return res.send('这里将会是注册页面');
});

module.exports = router;