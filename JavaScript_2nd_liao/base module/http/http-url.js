'use strict'

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// url模块，提供了parse()方法，将一个字符串解析为一个Url对象