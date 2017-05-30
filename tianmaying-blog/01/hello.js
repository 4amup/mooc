// 尽量使用最新的ES6语法来构建
// 6.10.3版本的文档例子也更新为const了
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在http://${hostname}:${port}`);
});