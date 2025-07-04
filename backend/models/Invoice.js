const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true },
  date: { type: Date, required: true },
  patientName: { type: String, required: true },
  patientContact: { type: String, required: true },
  service: { type: String, required: true },
  amount: { type: Number, required: true },
  notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
