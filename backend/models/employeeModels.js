const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    salary:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    updatedAt:{
        type: Date,
        default: new Date()
    },
});

const EmployeeModel = mongoose.model('employees', employeeSchema);
module.exports = EmployeeModel;
// This code defines a Mongoose schema for an employee management system.