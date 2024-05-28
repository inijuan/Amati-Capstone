const express = require('express');
const router = express.Router();
const materialHandler = require('../handlers/materialHandler');

// Route for creating a new material
router.post('/materials', materialHandler.createMaterial);

// Route for getting a material by ID
router.get('/materials/:id', materialHandler.getMaterialById);

// Route for updating a material by ID
router.put('/materials/:id', materialHandler.updateMaterialById);

// Route for deleting a material by ID
router.delete('/materials/:id', materialHandler.deleteMaterialById);

module.exports = router;
