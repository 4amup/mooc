const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');

// url: 就是'/static/'
// dir: 就是__dirname + '/static'
function staticFiles(url,dir) {
  return async(ctx,next) => {
    let rpath = ctx.request.path;
    // 判断是否是指定的url开头
    if (rpath.startsWith(url)) {
      // 文件完整路径
      let fp = path.join(dir,rpath.substring(url.length));
      // 判断文件是否存在
      if (await fs.exists(fp)) {
        ctx.response.type = mime.lookup(rpath);
        ctx.response.body = await fs.readFile(fp);
      } else {
        // 文件不存在
        ctx.response.status = 404;
      }
    } else {
      // 如果不是指定前缀的url，继续处理下一个middleware
      await next();
    }
  };
}

module.exports = staticFiles;