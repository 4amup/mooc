'use strict'

var path = require('path');

// 解析当前目录
var workDir = path.resolve('.'); //'User/lee'

// 组合完整的文件路径：当前目录+'pub'+'index.html'
var filePath = path.join(workDir, 'pub', 'index.html');
// 'User/lee/pub/index.html