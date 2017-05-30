const Koa = require('koa');

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// log request url
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    // getTime是时间戳
    const start = new Date().getTime();
    let execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.set('X-Response-Time', `${execTime}ms`);
});

// static files support
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));

// redirect to /static/index.html
app.use(async(ctx, next) => {
    ctx.response.redirect('/static/index.html');
});

app.listen(3000);
console.log('app started at http://localhost:3000');