var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

var root = path.resolve(process.argv[2] || '');
console.log("pwd is " + root);

var server = http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    var location = url.parse(req.url).href;
    var fullpath = path.join(root,pathname);
    fs.stat(fullpath, function(err, stats){
        if (!err && stats.isFile()) {
            console.log('ok!');
            res.writeHead('200 ' + req.url);
            fs.createReadStream(fullpath).pipe(res);
        } else if (!err && !stats.isFile()) {
            fs.readdir(fullpath, function(err, files){
                if (err) {
                    console.log("no files found in this dir!");
                } else {
                    console.log("list all files and dirs!")
                    var list = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body>';
                    for (var file of files) {
                        var filepath = path.join(location, file);
                        list += '<a href="' + filepath + '">' + file + '</a><br />';
                    }
                    list += '</body></html>';
                    res.end(list);
                }
            });
        } else {
            console.log('error, ' + fullpath + ' not found!');
            res.end('404 not found!');
        }
    });
});

server.listen(8080);
console.log("server running on port 8080");