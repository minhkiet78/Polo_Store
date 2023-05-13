const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();
const UserController = require('../controller/UserController');
router.get('/profile', authenticateToken, UserController.getInfo);
module.exports = router;
