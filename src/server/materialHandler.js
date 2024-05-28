const bigQueryService = require('../services/bigQueryService');

const createMaterial = async (req, h) => {
    const { material_id, material_name, material_type, material_description, material_amount, material_order_date, supplier_id } = req.payload;
    try {
        await bigQueryService.createMaterial({ material_id, material_name, material_type, material_description, material_amount, material_order_date, supplier_id });
        return h.response({ message: 'Material created successfully' }).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ error: error.message }).code(500);
    }
};

const listMaterial = async (req, h) => {
    try {
        const materials = await bigQueryService.listMaterial();
        return h.response(materials).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ error: error.message }).code(500);
    }
};

module.exports = { createMaterial, listMaterial };
