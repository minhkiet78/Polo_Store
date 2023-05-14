const Cart = require('../models/Cart');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

class CartController {
    async getAll(req, res) {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            const decoded = jwt.verify(token, process.env.SECRETKEY);
            const userId = mongoose.Types.ObjectId(decoded.userId);
            const data = await Cart.find({ user_id: userId }).populate('product_id', '-createdAt -updatedAt -deleted');
            res.status(200).json({
                success: true,
                data,
            });
        } catch (error) {
            res.status(400);
        }
    }

    async create(req, res) {
        const formData = req.body;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.SECRETKEY);
        const userId = mongoose.Types.ObjectId(decoded.userId);
        // Trả về thông tin user
        formData.user_id = userId;
        try {
            await new Cart(formData).save();
            res.status(200).json({
                success: true,
                message: 'Thêm đơn hàng thành công',
            });
        } catch (error) {
            res.status(400).json({
                error,
                message: 'Thêm đơn hàng thất bại',
            });
        }
    }
}

module.exports = new CartController();
