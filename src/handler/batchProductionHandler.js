const batchProductionService = require('../services/batchProductionService');

// Handler for creating a new batch production
exports.createBatchProduction = async (req, res) => {
  try {
    const result = await batchProductionService.createBatchProduction(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for retrieving batch production by ID
exports.getBatchProductionById = async (req, res) => {
  try {
    const batchProductionId = req.params.id;
    const batchProduction = await batchProductionService.getBatchProductionById(batchProductionId);
    if (!batchProduction) {
      res.status(404).send('Batch production not found');
    } else {
      res.status(200).send(batchProduction);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for updating batch production by ID
exports.updateBatchProductionById = async (req, res) => {
  try {
    const batchProductionId = req.params.id;
    const updatedBatchProduction = await batchProductionService.updateBatchProductionById(batchProductionId, req.body);
    if (!updatedBatchProduction) {
      res.status(404).send('Batch production not found');
    } else {
      res.status(200).send(updatedBatchProduction);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for deleting batch production by ID
exports.deleteBatchProductionById = async (req, res) => {
  try {
    const batchProductionId = req.params.id;
    const deletedBatchProduction = await batchProductionService.deleteBatchProductionById(batchProductionId);
    if (!deletedBatchProduction) {
      res.status(404).send('Batch production not found');
    } else {
      res.status(200).send('Batch production deleted successfully');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
