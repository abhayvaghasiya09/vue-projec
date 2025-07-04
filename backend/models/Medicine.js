const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  supplierName: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  manufactureDate: { type: Date, required: true },
  qty: { type: Number, required: true },
  unitPrice: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Medicine', medicineSchema);
