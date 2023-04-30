const jwt = require('jsonwebtoken');

class UserController {
    getInfo(req, res) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        try {
            // Xác thực và giải mã access token sử dụng secret key
            const decoded = jwt.verify(token, process.env.SECRETKEY);

            // Trả về thông tin user
            return res.status(200).json({
                success: true,
                data: decoded,
            });
        } catch (err) {
            // Nếu xác thực không thành công, trả về lỗi hoặc null
            console.log(err);
            return null;
        }

        // const user = getUserFromToken(req);

        // if (!user) {
        //     // Nếu không tìm thấy user, trả về lỗi hoặc thông báo không đăng nhập
        //     res.status(401).json({ error: 'Unauthorized' });
        // } else {
        //     // Nếu tìm thấy user, thực hiện các thao tác tiếp theo
        //     // ...
        // }
    }
}
module.exports = new UserController();
