const Patient = require('../models/Patient');

// Create
exports.createPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: 'Patient created successfully', patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read All
exports.getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read One
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json({ message: 'Patient updated', patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json({ message: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
