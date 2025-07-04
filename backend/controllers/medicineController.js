const Medicine = require('../models/Medicine');

// Create
exports.createMedicine = async (req, res) => {
  try {
    const medicine = new Medicine(req.body);
    await medicine.save();
    res.status(201).json({ message: 'Medicine saved successfully!', medicine });
  } catch (error) {
    console.error('Error creating medicine:', error);
    res.status(500).json({ error: 'Failed to create medicine' });
  }
};

// Read All
exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch medicines' });
  }
};

// Read One
exports.getMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) return res.status(404).json({ error: 'Medicine not found' });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch medicine' });
  }
};

// Update
exports.updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update medicine' });
  }
};

// Delete
exports.deleteMedicine = async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete medicine' });
  }
};
