const bigQueryService = require('../services/bigQueryService');

const createProduct = async (req, h) => {
    const { product_id, product_name, product_description, product_amount, material_id, product_date_created } = req.payload;
    try {
        await bigQueryService.createProduct({ product_id, product_name, product_description, product_amount, material_id, product_date_created });
        return h.response({ message: 'Product created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: error.message }).code(500);
    }
};

const listProduct = async (req, h) => {
    try {
        const products = await bigQueryService.listProduct();
        return h.response(products).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createProduct, listProduct };
