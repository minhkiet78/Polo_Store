const fs = require('fs');
const Product = require('../models/Product');

class ProductController {
    async getAll(req, res) {
        try {
            const data = await Product.find({});
            res.status(200).json({
                success: true,
                data,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
            });
        }
    }
    async create(req, res) {
        const { filename } = req.file;
        let formData = req.body;
        formData.image = filename;
        try {
            await new Product(formData).save();
            res.status(200).json({
                success: true,
                message: 'Thêm thành công',
            });
        } catch (error) {
            res.status(400).json({
                success: false,
            });
        }
    }

    // getDetail
    async detail(req, res) {
        try {
            const data = await Product.findOne({ slug: req.params.slug });
            if (data) {
                res.status(200).json({
                    success: true,
                    data,
                });
            }
        } catch (error) {
            console.log(object);
        }
    }
}

module.exports = new ProductController();
