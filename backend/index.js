const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

require('./models/db');
const EmployeeRouter = require('./Routes/EmployeeRoutes');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Employee management system is runnning');
});

app.use('/api/employees', EmployeeRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });