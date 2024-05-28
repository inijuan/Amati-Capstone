const deliveryService = require('../services/deliveryService');

// Handler for creating a new delivery
exports.createDelivery = async (req, res) => {
  try {
    const result = await deliveryService.createDelivery(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for retrieving a delivery by ID
exports.getDeliveryById = async (req, res) => {
  try {
    const deliveryId = req.params.id;
    const delivery = await deliveryService.getDeliveryById(deliveryId);
    if (!delivery) {
      res.status(404).send('Delivery not found');
    } else {
      res.status(200).send(delivery);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for updating a delivery by ID
exports.updateDeliveryById = async (req, res) => {
  try {
    const deliveryId = req.params.id;
    const updatedDelivery = await deliveryService.updateDeliveryById(deliveryId, req.body);
    if (!updatedDelivery) {
      res.status(404).send('Delivery not found');
    } else {
      res.status(200).send(updatedDelivery);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for deleting a delivery by ID
exports.deleteDeliveryById = async (req, res) => {
  try {
    const deliveryId = req.params.id;
    const deletedDelivery = await deliveryService.deleteDeliveryById(deliveryId);
    if (!deletedDelivery) {
      res.status(404).send('Delivery not found');
    } else {
      res.status(200).send('Delivery deleted successfully');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
