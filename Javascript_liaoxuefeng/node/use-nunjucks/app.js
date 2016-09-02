const nunjucks = require('nunjucks');

function createEnv(path,opts){
  var
    autoescape = opts.autoescape && true,
    noCahe = opts.noCache || false,
    watch = opts.watch || false,
    throwOnUnderdefined = opts.throwOnUnderdefined || false,
    env = new nunjucks.Environment(
      new nunjuck.FileSystemLoader('views',{
        noCache: noCahe,
        watch: watch
      }),{
        autoescape: autoescape,
        throwOnUndefined: throwOnUndifined
      });
    
    if (opts.filters) {
      for (var f in opts.filters) {
        env.addFilter(f,opts.filters[f]);        
      }
    }
    return env;
}

var env = createEnv('view',{
  watch:true,
  filters:{
    hex:function(n){
      return '0x' + n.toString(16);
    }
  }
});