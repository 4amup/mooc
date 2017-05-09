const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    let autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if(opts.filters) {
        for(let f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function(n) { // 这个过滤器用来将转换成16位数字
            return 'Ox' + n.toString(16);
        }
    }
});

var s = env.render('extend.html', {header: 'Hello', body: 'wowowowowo...'});
console.log(s);