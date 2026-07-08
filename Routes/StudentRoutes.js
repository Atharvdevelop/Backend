const { CreateStudent, GetAllStudent, GetAllStudentById, UpdateStudent } = require('../Controller/StudentController');
const express = require('express');
const router = express.Router();

router.post('/studentcreate', CreateStudent);
router.get('/studentall', GetAllStudent);
router.get('/:id', GetAllStudentById);
router.put('/:id', UpdateStudent);

module.exports = router;
