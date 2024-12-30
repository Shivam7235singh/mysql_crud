const express = require('express');
const { getStudent, getStudentByid } = require('../controllers/studentcontroller');

const router = express.Router();

// GET all students
router.get('/getall', getStudent);

// get student by id 
router.get('/get/:id', getStudentByid);

module.exports = router;
