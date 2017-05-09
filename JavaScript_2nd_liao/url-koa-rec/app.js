const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const router = new Router();
const app = new Koa();

app.use(bodyParser());

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// 先导入fs模块，然后用同步读取文件，因为只启动一次同步，不存在性能问题
var files = fs.readdirSync(__dirname + '/controllers');
// 过滤出.js文件，其中endswith()方法是es6开始原生支持的
var js_files = files.filter((f)=>{
    return f.endsWith('.js');
});

// 开始处理每个js文件，js_files是一个数组
for(var f of js_files) {
    console.log(`process controller: ${f}...`);
    // 导入js文件
    let mapping = require(__dirname + '/controllers/' + f);
    for (let url in mapping) {
        if (url.startsWith('GET')) {
            // 如果url类似于"GET xxx";
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if(url.startsWith('POST')) {
            let path = url.substring(4);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            // 无效的URL
            console.log(`invalid URL: ${url}`);
        }
    }
}

// add router middleware:
app.use(router.routes());

// // add url-route:
// router.get('/', async (ctx, next) => {
//     ctx.response.body = `<h1>Index</h1>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value="koa"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// });

// router.post('/signin', async (ctx, next) => {
//     var name = ctx.request.body.name || '',
//         password = ctx.request.body.password || '';

//     console.log(`signin with name: ${name}, password: ${password}`);
//     if(name === 'koa' && password === "12345") {
//         ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//     } else {
//         ctx.response.body = `<h1>Login faild!</h1>
//         <p><a href="/">Try again.</a></p>`;
//     }
// });

app.listen(3000);
console.log('app started at port 3000...');