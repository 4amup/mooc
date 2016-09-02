const nunjucks = require('nunjucks');
// 建立一个environment对象的构造函数
function createEnv(path, opts) {
    var
        autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}
// 创建一个environment的实例
var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});
// 创建environment实例
var env = createEnv('view',{
  watch:true,
  filters:{
    hex:function(n){
      return '0x' + n.toString(16);
    }
  }
});
var s = env.render('hello.html',{name:'小明'});
console.log(s);