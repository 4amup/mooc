// 进一步抽象路由函数

const fs = require('fs');
// 为dir中的控制函数加上路由
function addMapping(router, mapping) {
    for(let url in mapping) {
        if(url.startsWith('GET')) {
            let path = url.substring(3);
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
// 使用filter方法过滤出dir文件夹中的.js文件
function addControllers(router, dir) {
    let files = fs.readdirSync(dir);
    let js_files = files.filter((f)=> { // js_files就是dir文件夹中的js文件的数组
        return f.endsWith('.js');
    });

    for (let f of js_files) { // 取出dir文件夹中的js文件
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/controllers/' + f); // 取控制器函数
        addMapping(router, mapping);
    }

}
// 导出模块带一个自主选文件夹的参数
module.exports = function(dir) {
    let controllers_dir = dir || 'controllers',
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
};