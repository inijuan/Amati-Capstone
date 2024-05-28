const express = require('express');
const router = express.Router();
const productHandler = require('../handlers/productHandler');

// Route for creating a new product
router.post('/products', productHandler.createProduct);

// Route for getting a product by ID
router.get('/products/:id', productHandler.getProductById);

// Route for updating a product by ID
router.put('/products/:id', productHandler.updateProductById);

// Route for deleting a product by ID
router.delete('/products/:id', productHandler.deleteProductById);

module.exports = router;
