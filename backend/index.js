// This is the main entry point for the backend application
// It sets up the Express server, connects to the database, and defines the routes for the
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const EmployeeRoutes = require('./Routes/EmployeeRoutes');
const PORT = process.env.PORT || 8080;
// Connect to the database
// This will import the database connection and initialize it
require('./models/db');
app.use(cors());
app.use(bodyParser.json());

// Middleware to parse JSON bodies
app.use('/api/employees', EmployeeRoutes);

// Middleware to handle employee-related routes
// This will import the employee routes and use them for the /api/employees endpoint
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})