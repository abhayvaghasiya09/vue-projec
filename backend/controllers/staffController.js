const Staff = require('../models/Staff');

// Create
exports.createStaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staff.save();
    res.status(201).json({ message: 'Staff created successfully', staff });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
exports.getAllStaff = async (req, res) => {
  try {
    const staffList = await Staff.find();
    res.json(staffList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read One
exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ error: 'Staff not found' });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!staff) return res.status(404).json({ error: 'Staff not found' });
    res.json({ message: 'Staff updated', staff });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ error: 'Staff not found' });
    res.json({ message: 'Staff deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
