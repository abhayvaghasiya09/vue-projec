const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  nic: String,
  dob: Date,
  gender: String,
  admissionDate: Date,
  admissionTime: String,
  department: String,
  room: String,
  message: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Patient', patientSchema);
