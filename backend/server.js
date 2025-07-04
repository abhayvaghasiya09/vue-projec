// backend/server.js
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const dotenv = require('dotenv');


dotenv.config(); // 👈 Must be before using process.env


const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Connect Database
connectDB()

// Routes
const appointmentRoutes = require('./routes/appointmentRoutes');
const staffRoutes = require('./routes/staffRoutes');
const patientRoutes = require('./routes/patientRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const authRoutes = require('./routes/authRoutes');


app.use('/api/auth',authRoutes)

app.use('/api/appointments', appointmentRoutes); 

app.use('/api/staff', staffRoutes);

app.use('/api/patients', patientRoutes);

app.use('/api/invoices', invoiceRoutes);

app.use('/api/medicines', medicineRoutes);

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
