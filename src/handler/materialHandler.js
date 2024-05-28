const materialService = require('../services/materialService');

// Handler for creating a new material
exports.createMaterial = async (req, res) => {
  try {
    const result = await materialService.createMaterial(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for retrieving a material by ID
exports.getMaterialById = async (req, res) => {
  try {
    const materialId = req.params.id;
    const material = await materialService.getMaterialById(materialId);
    if (!material) {
      res.status(404).send('Material not found');
    } else {
      res.status(200).send(material);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for updating a material by ID
exports.updateMaterialById = async (req, res) => {
  try {
    const materialId = req.params.id;
    const updatedMaterial = await materialService.updateMaterialById(materialId, req.body);
    if (!updatedMaterial) {
      res.status(404).send('Material not found');
    } else {
      res.status(200).send(updatedMaterial);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for deleting a material by ID
exports.deleteMaterialById = async (req, res) => {
  try {
    const materialId = req.params.id;
    const deletedMaterial = await materialService.deleteMaterialById(materialId);
    if (!deletedMaterial) {
      res.status(404).send('Material not found');
    } else {
      res.status(200).send('Material deleted successfully');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
