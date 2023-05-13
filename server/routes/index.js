const express = require('express');
const router = express.Router();

router.use('/products', require('./product'));
router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/cart', require('./cart'));
module.exports = router;
