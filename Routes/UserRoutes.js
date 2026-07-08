const {CreateUser,GetAllUser} = require('../Controller/UserController');
const express = require('express');
const router = express.Router();

router.post('/create',CreateUser);
router.get('/all',GetAllUser);

module.exports = router;