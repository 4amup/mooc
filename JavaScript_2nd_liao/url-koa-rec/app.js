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

// 进一步抽象路由函数
function addMapping(router, mapping) {
    for(let url in mapping) {
        if(url.startsWith('GET')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST')) {
            let path = url.substring(4);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router) {
    let files = fs.readdirSync(__dirname + '/controllers/');
    let js_files = files.filter((f)=> {
        return f.endsWith('.js');
    });

    for (let f of js_files) {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/controllers/' + f);
        addMapping(router, mapping);
    }

}
addControllers(router);
// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');