const isProduction = process.env.NODE_ENV = 'production';
const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const app = new Koa();
const templating = require('./templating');
const controller = require('./controller');
// 记录URL以及页面执行时间
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    let start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
})
// 处理静态文件的中间件
if(!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname +'/static'));
}
// 解析POST请求的内容
app.use(bodyParser());
// 负责给ctx加上render()来使用Nunjucks
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));
// 处理URL路由
app.use(controller());

app.listen(3000);
console.log('listenning at http://localhost:3000');