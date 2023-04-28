const express = require('express');
const router = express.Router();

router.use('/products', require('./product'));
router.use('/auth', require('./auth'));
module.exports = router;
