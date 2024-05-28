const express = require('express');
const router = express.Router();
const batchProductionHandler = require('../handlers/batchProductionHandler');

// Route for creating a new batch production
router.post('/batch-productions', batchProductionHandler.createBatchProduction);

// Route for getting a batch production by ID
router.get('/batch-productions/:id', batchProductionHandler.getBatchProductionById);

// Route for updating a batch production by ID
router.put('/batch-productions/:id', batchProductionHandler.updateBatchProductionById);

// Route for deleting a batch production by ID
router.delete('/batch-productions/:id', batchProductionHandler.deleteBatchProductionById);

module.exports = router;
