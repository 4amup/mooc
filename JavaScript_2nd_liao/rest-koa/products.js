// 本文件目的在于模拟数据库的操作，简化业务逻辑
// manufacturer是制造商的意思
var id = 0;

function nextId() {
    id++;
    return 'p' + id;
}

// function Product(name, manufacturer, price) {
//     this.id = nextId();
//     this.name = name;
//     this.manufacturer = manufacturer;
//     this.price = price;
// }

function newProduct(name, manufacturer, price) {
    let obj = {};
    obj.id = nextId();
    obj.name = name;
    obj.manufacturer = manufacturer;
    obj.price = price;
    return obj;
}

var products = [
        newProduct("iPhone7", "Apple", 7000),
        newProduct("kindle", "amazon", 899)
    ];

// console.log(JSON.stringify(products));
console.log(products);

module.exports = {
    getProducts: () => {
        return products;
    },

    getProducts: (id) => {
        for(let i=0; i<products.length; i++) {
            if(products[i].id === id) {
                return products[i];
            }
        }
        return null;
    },

    createProduct: (name, manufacturer, price) => {
        var p = new Product(name, manufacturer, price);
        products.push(p);
        return p;
    },

    deleteProduct: (id) => {
        // 倒着删除，因为index是实时更新的
        var index = -1,
            i;
        for(i=0; i<products.length; i++) {
            if(products[i].id === id) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            // remove
            return products.splice(index, 1)[0];
        }
        return null;
    }
};