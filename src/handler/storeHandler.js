const storeService = require('../services/storeService');

// Handler for creating a new store
exports.createStore = async (req, res) => {
  try {
    const result = await storeService.createStore(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for retrieving a store by ID
exports.getStoreById = async (req, res) => {
  try {
    const storeId = req.params.id;
    const store = await storeService.getStoreById(storeId);
    if (!store) {
      res.status(404).send('Store not found');
    } else {
      res.status(200).send(store);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for updating a store by ID
exports.updateStoreById = async (req, res) => {
  try {
    const storeId = req.params.id;
    const updatedStore = await storeService.updateStoreById(storeId, req.body);
    if (!updatedStore) {
      res.status(404).send('Store not found');
    } else {
      res.status(200).send(updatedStore);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for deleting a store by ID
exports.deleteStoreById = async (req, res) => {
  try {
    const storeId = req.params.id;
    const deletedStore = await storeService.deleteStoreById(storeId);
    if (!deletedStore) {
      res.status(404).send('Store not found');
    } else {
      res.status(200).send('Store deleted successfully');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
