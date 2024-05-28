const express = require('express');
const router = express.Router();
const supplierHandler = require('../handlers/supplierHandler');

// Route for creating a new supplier
router.post('/suppliers', supplierHandler.createSupplier);

// Route for getting a supplier by ID
router.get('/suppliers/:id', supplierHandler.getSupplierById);

// Route for updating a supplier by ID
router.put('/suppliers/:id', supplierHandler.updateSupplierById);

// Route for deleting a supplier by ID
router.delete('/suppliers/:id', supplierHandler.deleteSupplierById);

module.exports = router;
