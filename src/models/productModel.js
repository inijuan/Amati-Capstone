const {
    addProductHandler,
    getAllProductsHandler,
    getProductByIdHandler,
    editProductByIdHandler,
    deleteProductByIdHandler,
  } = require('../handlers/productsHandler');
  
  const routes = [
    {
      method: 'POST',
      path: '/products',
      handler: addProductHandler,
    },
    {
      method: 'GET',
      path: '/products',
      handler: getAllProductsHandler,
    },
    {
      method: 'GET',
      path: '/products/{productId}',
      handler: getProductByIdHandler,
    },
    {
      method: 'PUT',
      path: '/products/{productId}',
      handler: editProductByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/products/{productId}',
      handler: deleteProductByIdHandler,
    },
  ];
  
  module.exports = routes;
  