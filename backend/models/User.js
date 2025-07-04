const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  nic: String,
  dob: Date,
  username: { type: String, unique: true },
  occupation: String,
  password: String,
  role: { type: String, enum: ['admin', 'doctor', 'patient'], default: 'patient' }
});

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('User', userSchema);
