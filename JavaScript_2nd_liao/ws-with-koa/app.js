const url = require('url');

const ws = require('ws');

const Cookies = require('cookies');

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const WebSocketServer = ws.Server;

const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production'; // 在这里写错了，这是个判断的，我当成了赋值的，找了半天才找到错误
// log request URL
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse user from cookie
app.use(async (ctx, next) => {
    // parserUser在下面声明
    ctx.state.user = parseUser(ctx.cookies.get('name') || '');
    await next();
})

// 解析静态文件
if(!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname +'/static'));
}

// parser request body
app.use(bodyParser());

// add nunjucks as view
app.use(templating('views', {
    noCache: true,
    watch: true
}))

// 处理URL路由
app.use(controller());
// koa app的listen()方法返回http.Server
let server = app.listen(3000);

// 解析user的函数
function parseUser(obj) {
    if(!obj) return;
    console.log('try parse: ' + obj);
    let s = '';
    if(typeof obj === 'string') {
        s = obj;
    } else if(obj.headers) {
        let cookies = new Cookies(obj, null);
        s = cookies.get('name');
    }
    if(s) {
        try {
            let user = JSON.parse(Buffer.from(s, 'base64').toString());
            console.log(`User: ${user.name}, ID: ${user.id}`);
            return user;
        } catch (err) {
            // ignore
        }
    }
}
// 创建WebSocketServer
function createWebSocketServer(server, onConnection, onMessage, onClose, onError) {
    let wss = new WebSocketServer({
        server: server
    });
    wss.broadcast = function broadcast(data) {
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    };
    onConnection = onConnection || function () {
        console.log('[WebSocket] connected.');
    };
    onMessage = onMessage || function (msg) {
        console.log('[WebSocket] message received: ' + msg);
    };
    onClose = onClose || function (code, message) {
        console.log(`[WebSocket] closed: ${code} - ${message}`);
    };
    onError = onError || function (err) {
        console.log('[WebSocket] error: ' + err);
    };
    wss.on('connection', function (ws, req) {
        let location = url.parse(req.url, true);// upgradeReq属性已经被ws删掉了
        console.log('[WebSocketServer] connection: ' + location.href);
        ws.on('message', onMessage);
        ws.on('close', onClose);
        ws.on('error', onError);
        if (location.pathname !== '/ws/chat') {
            // close ws:
            ws.close(4000, 'Invalid URL');
        }
        // check user:
        let user = parseUser(req);
        if (!user) {
            ws.close(4001, 'Invalid user');
        }
        ws.user = user;
        ws.wss = wss;
        onConnection.apply(ws);
    });
    console.log('WebSocketServer was attached.');
    return wss;
}

var messageIndex = 0;

function createMessage(type, user, data) {
    messageIndex ++;
    return JSON.stringify({
        id: messageIndex,
        type: type,
        user: user,
        data: data
    });
}

function onConnect() {
    let user = this.user;
    let msg = createMessage('join', user, `${user.name} joined.`);
    this.wss.broadcast(msg);
    // build user list:
    let users = [];
    this.wss.clients.forEach(function (client) {
        users.push(client.user);
    });
    this.send(createMessage('list', user, users));
}

function onMessage(message) {
    console.log(message);
    if (message && message.trim()) {
        let msg = createMessage('chat', this.user, message.trim());
        this.wss.broadcast(msg);
    }
}

function onClose() {
    let user = this.user;
    let msg = createMessage('left', user, `${user.name} is left.`);
    this.wss.broadcast(msg);
}

app.wss = createWebSocketServer(server, onConnect, onMessage, onClose);

console.log('listenning at http://localhost:3000');