const supplierService = require('../services/supplierService');

// Handler for creating a new supplier
exports.createSupplier = async (req, res) => {
  try {
    const result = await supplierService.createSupplier(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for retrieving a supplier by ID
exports.getSupplierById = async (req, res) => {
  try {
    const supplierId = req.params.id;
    const supplier = await supplierService.getSupplierById(supplierId);
    if (!supplier) {
      res.status(404).send('Supplier not found');
    } else {
      res.status(200).send(supplier);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for updating a supplier by ID
exports.updateSupplierById = async (req, res) => {
  try {
    const supplierId = req.params.id;
    const updatedSupplier = await supplierService.updateSupplierById(supplierId, req.body);
    if (!updatedSupplier) {
      res.status(404).send('Supplier not found');
    } else {
      res.status(200).send(updatedSupplier);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for deleting a supplier by ID
exports.deleteSupplierById = async (req, res) => {
  try {
    const supplierId = req.params.id;
    const deletedSupplier = await supplierService.deleteSupplierById(supplierId);
    if (!deletedSupplier) {
      res.status(404).send('Supplier not found');
    } else {
      res.status(200).send('Supplier deleted successfully');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
