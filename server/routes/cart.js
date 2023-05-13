const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();
const CartController = require('../controller/CartController');
router.get('/get_all', authenticateToken, CartController.getAll);
router.post('/create', authenticateToken, CartController.create);
module.exports = router;
