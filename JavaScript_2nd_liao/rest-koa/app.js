const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const rest = require('./rest');

const app = new Koa();

// 记录请求的URL
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method}${ctx.request.url}`);
    await next();
});

// 处理静态文件的中间件
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname +'/static'));

// 解析POST请求的内容
app.use(bodyParser());

// 负责给ctx加上render()来使用Nunjucks
app.use(templating('views', {
    noCache: true,
    watch: true
}));

// bind .rest() for ctx
app.use(rest.restify());

// 处理URL路由
app.use(controller());

app.listen(3000);
console.log('listenning at http://localhost:3000');