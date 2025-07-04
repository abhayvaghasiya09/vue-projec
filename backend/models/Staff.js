const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  nic: String,
  dob: Date,
  department: String,
  role: String,
  status: String
}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
