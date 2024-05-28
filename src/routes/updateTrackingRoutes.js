const express = require('express');
const router = express.Router();
const updateTrackingHandler = require('../handlers/updateTrackingHandler');

// Route for creating a new update tracking entry
router.post('/update-tracking', updateTrackingHandler.createUpdateTracking);

// Route for getting an update tracking entry by ID
router.get('/update-tracking/:id', updateTrackingHandler.getUpdateTrackingById);

// Route for updating an update tracking entry by ID
router.put('/update-tracking/:id', updateTrackingHandler.updateUpdateTrackingById);

// Route for deleting an update tracking entry by ID
router.delete('/update-tracking/:id', updateTrackingHandler.deleteUpdateTrackingById);

module.exports = router;
