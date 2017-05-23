const products = require('../products');

const APIError = require('../rest').APIError;

module.exports = {
    'GET /api/products': async(ctx, next) => {
        ctx.rest({
            // [{"id":"p2","name":"iPhone7","manufacturer":"Apple","price":7000},{"id":"p3","name":"kindle","manufacturer":"amazon","price":899}]
            products: products.getProducts()
            // products: [{"id":"p2","name":"iPhone7","manufacturer":"Apple","price":7000},{"id":"p3","name":"kindle","manufacturer":"amazon","price":899}]
        });
    },
    'POST /api/products': async(ctx, next) => {
        var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
        ctx.rest(p);
    },
    'DLETE /api/products/:id': async(ctx, next) => {
        console.log(`delete product ${ctx.params.id}...`);
        var p = products.deleteProduct(ctx.params.id);
        if(p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id');
        }
    }
};