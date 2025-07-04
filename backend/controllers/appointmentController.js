const Appointment = require('../models/Appointment');

// Create
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Appointment created', appointment });
  } catch (err) {
    res.status(400).json({ message: 'Error creating appointment' });
  }
};

// Read
exports.getAllAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
};

// Update
exports.updateAppointment = async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Updated', updated });
};

// Delete
exports.deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
