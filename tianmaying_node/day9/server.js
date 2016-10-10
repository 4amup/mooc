var fs = require('fs')
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'}); 
//以上flags：a的意思是以追加模式打开文件，不存在则创建


var app = express();
app.use(favicon(__dirname + '/favicon.ico'));
app.use(logger('combined', {stream: accessLogStream}));

app.get('/', function(req, res){
  res.send('hello world');
});
app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');