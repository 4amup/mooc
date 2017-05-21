// 存储Product列表，相当于模拟数据库
var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'kindle',
    price: 999
}];

module.exports = {
    'GET /api/products': async (ctx, next) => {
        // 设置Content-Type
        ctx.response.type = 'appliction/json';
        // 设置Response Body
        ctx.response.body = {
            products: products
        };
    },
    'POSt /api/products': async (ctx, next) => {
        var p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        products.push(p);
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
};