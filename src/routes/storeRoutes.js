const express = require('express');
const router = express.Router();
const storeHandler = require('../handlers/storeHandler');

// Route for creating a new store
router.post('/stores', storeHandler.createStore);

// Route for getting a store by ID
router.get('/stores/:id', storeHandler.getStoreById);

// Route for updating a store by ID
router.put('/stores/:id', storeHandler.updateStoreById);

// Route for deleting a store by ID
router.delete('/stores/:id', storeHandler.deleteStoreById);

module.exports = router;
