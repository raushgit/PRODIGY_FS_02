const { createEmployee,
    getAllEmployees,
    getEmployeeById,
    deleteEmployeeById,
    updateEmployeeById
} = require('../Controllers/EmployeeController');
const { cloudinaryFileUploader } = require('../Middlewares/FileUplaoder');

// File: backend/Routes/EmployeeRoutes.js
// This file defines the routes for employee management
const router = require('express').Router();


// Define the routes for employee management
// These routes handle the creation, retrieval, updating, and deletion of employee records
router.get('/', getAllEmployees)
router.get('/:id', getEmployeeById)
router.delete('/:id', deleteEmployeeById)
router.put('/:id', cloudinaryFileUploader.single('profileImage'), updateEmployeeById)
router.post('/', cloudinaryFileUploader.single('profileImage'), createEmployee);

module.exports = router;