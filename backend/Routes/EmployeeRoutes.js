const { createEmployee } = require('../Controllers/EmployeeController');

const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Get all employees');
});

routes.post('/', createEmployee)

module.exports = routes;