const productService = require('../services/productService');

// Handler for creating a new product
exports.createProduct = async (req, res) => {
  try {
    const result = await productService.createProduct(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for retrieving a product by ID
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    if (!product) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).send(product);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for updating a product by ID
exports.updateProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await productService.updateProductById(productId, req.body);
    if (!updatedProduct) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).send(updatedProduct);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for deleting a product by ID
exports.deleteProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await productService.deleteProductById(productId);
    if (!deletedProduct) {
      res.status(404).send('Product not found');
    } else {
      res.status(200).send('Product deleted successfully');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
