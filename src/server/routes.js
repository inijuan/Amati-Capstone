const materialHandler = require('./materialHandler');
const productHandler = require('./productHandler');

const routes = [
    {
        method: 'POST',
        path: '/create-material',
        handler: materialHandler.createMaterial,
    },
    {
        method: 'GET',
        path: '/list-material',
        handler: materialHandler.listMaterial,
    },
    {
        method: 'POST',
        path: '/create-product',
        handler: productHandler.createProduct,
    },
    {
        method: 'GET',
        path: '/list-product',
        handler: productHandler.listProduct,
    },
];

module.exports = routes;
