const Cart = require('../models/Cart');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const getIdUser = (req) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const decoded = jwt.verify(token, process.env.SECRETKEY);
    const userId = mongoose.Types.ObjectId(decoded.userId);
    return userId;
};

class CartController {
    async getAll(req, res) {
        try {
            const data = await Cart.find({ user_id: getIdUser(req) }).populate(
                'product_id',
                '-createdAt -updatedAt -deleted',
            );
            res.status(200).json({
                success: true,
                data,
            });
        } catch (error) {
            res.status(400);
        }
    }

    async create(req, res) {
        const formData = { ...req.body, user_id: getIdUser(req) };
        try {
            const cartItem = await Cart.findOne({ product_id: req.body.product_id, size: req.body.size });
            if (cartItem) {
                await Cart.updateOne(
                    { item_id: cartItem.item_id },
                    { $inc: { quantity: req.body.quantity, total_price: req.body.total_price } },
                );
            } else {
                await new Cart(formData).save();
            }
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
    async deleteCart(req, res) {
        try {
            await Cart.find({ user_id: getIdUser(req) }).deleteOne({ item_id: req.params.id });
            res.status(200).json({
                success: true,
                message: 'Xóa thành công',
            });
        } catch (error) {
            res.status(400);
        }
    }
    async updateCart(req, res) {
        try {
            const cartItem = await Cart.findOne({ product_id: req.body.product_id, size: req.body.size });
            if (cartItem) {
                await Cart.find({ user_id: getIdUser(req) }).deleteOne({ item_id: req.body.item_id });
                await Cart.updateOne(
                    { item_id: cartItem.item_id },
                    { $inc: { quantity: req.body.quantity, total_price: req.body.total_price } },
                );
            } else {
                await Cart.find({ user_id: getIdUser(req) }).updateOne(
                    { item_id: req.body.item_id },
                    { $set: req.body },
                );
            }

            res.status(200).json({
                success: true,
                message: 'Cập nhật thành công',
            });
        } catch (error) {
            res.status(400);
        }
    }
}

module.exports = new CartController();
