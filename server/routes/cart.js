const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();
const CartController = require('../controller/CartController');
router.get('/get_all', authenticateToken, CartController.getAll);
router.post('/create', authenticateToken, CartController.create);
router.delete('/delete_cart/:id', authenticateToken, CartController.deleteCart);
router.patch('/update_cart', authenticateToken, CartController.updateCart);
module.exports = router;
