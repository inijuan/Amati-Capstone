const updateTrackingService = require('../services/updateTrackingService');

// Handler for creating a new update tracking entry
exports.createUpdateTracking = async (req, res) => {
  try {
    const result = await updateTrackingService.createUpdateTracking(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for retrieving an update tracking entry by ID
exports.getUpdateTrackingById = async (req, res) => {
  try {
    const trackingId = req.params.id;
    const updateTracking = await updateTrackingService.getUpdateTrackingById(trackingId);
    if (!updateTracking) {
      res.status(404).send('Update tracking entry not found');
    } else {
      res.status(200).send(updateTracking);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for updating an update tracking entry by ID
exports.updateUpdateTrackingById = async (req, res) => {
  try {
    const trackingId = req.params.id;
    const updatedUpdateTracking = await updateTrackingService.updateUpdateTrackingById(trackingId, req.body);
    if (!updatedUpdateTracking) {
      res.status(404).send('Update tracking entry not found');
    } else {
      res.status(200).send(updatedUpdateTracking);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for deleting an update tracking entry by ID
exports.deleteUpdateTrackingById = async (req, res) => {
  try {
    const trackingId = req.params.id;
    const deletedUpdateTracking = await updateTrackingService.deleteUpdateTrackingById(trackingId);
    if (!deletedUpdateTracking) {
      res.status(404).send('Update tracking entry not found');
    } else {
      res.status(200).send('Update tracking entry deleted successfully');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
