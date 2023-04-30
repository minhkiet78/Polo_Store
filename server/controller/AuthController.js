const Account = require('../models/Account');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthController {
    // register
    register(req, res) {
        if (req.body.password !== req.body.c_password) {
            return res.status(400).json({ message: 'Mật khẩu không khớp' });
        }
        try {
            Account.findOne({ user_name: req.body.user_name }, async (err, existingAccount) => {
                if (existingAccount) {
                    // Trường hợp user_name đã tồn tại trong cơ sở dữ liệu
                    return res.status(400).json({ message: 'Tài khoản đã tồn tại' });
                }
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(req.body.password, salt);
                Account.create({ user_name: req.body.user_name, password: hashedPassword });
                res.status(200).json({
                    success: true,
                    message: 'Đăng ký thành công',
                });
            });
        } catch (error) {
            console.log(error);
        }
    }
    login(req, res) {
        try {
            Account.findOne({ user_name: req.body.user_name }, async (err, user) => {
                if (user) {
                    const validPassword = await bcrypt.compare(req.body.password, user.password);
                    if (validPassword) {
                        // create JWT
                        const accessToken = jwt.sign({ userId: user._id }, process.env.SECRETKEY);

                        return res.status(200).json({
                            success: true,
                            accessToken,
                            message: 'Đăng nhập thành công',
                        });
                    }
                    res.status(400).json({
                        message: 'Tài khoản hoặc mật khẩu không đúng',
                    });
                } else {
                    res.status(400).json({
                        message: 'Tài khoản hoặc mật khẩu không đúng',
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new AuthController();
