const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Account = require('../models/Account');

class UserController {
    async getInfo(req, res) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        try {
            // Xác thực và giải mã access token sử dụng secret key
            const decoded = jwt.verify(token, process.env.SECRETKEY);
            const userId = mongoose.Types.ObjectId(decoded.userId);
            // Trả về thông tin user
            const user = await Account.findById(userId).select('-password');
            if (user) {
                return res.status(200).json({
                    success: true,
                    data: user,
                });
            }
            return res.status(404).json({
                message: 'NOT FOUND',
            });
        } catch (err) {
            return res.status(400);
        }
    }
}
module.exports = new UserController();
