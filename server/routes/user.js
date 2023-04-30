const express = require('express');

const router = express.Router();
const UserController = require('../controller/UserController');
router.get('/profile', UserController.getInfo);
module.exports = router;
