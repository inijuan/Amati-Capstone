const express = require('express');
const router = express.Router();
const deliveryHandler = require('../handlers/deliveryHandler');

// Route for creating a new delivery
router.post('/deliveries', deliveryHandler.createDelivery);

// Route for getting a delivery by ID
router.get('/deliveries/:id', deliveryHandler.getDeliveryById);

// Route for updating a delivery by ID
router.put('/deliveries/:id', deliveryHandler.updateDeliveryById);

// Route for deleting a delivery by ID
router.delete('/deliveries/:id', deliveryHandler.deleteDeliveryById);

module.exports = router;
