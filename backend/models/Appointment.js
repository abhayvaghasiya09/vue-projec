const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  nic: String,
  dob: Date,
  gender: String,
  appointmentDate: Date,
  appointmentTime: String,
  department: String,
  doctorTime: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
