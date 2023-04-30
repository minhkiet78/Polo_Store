const Product = require('../models/Product');

class ProductController {
    async getAll(req, res) {
        try {
            let data;
            if (Object.keys(req.query).length === 0) {
                data = await Product.find({});
            } else if (req.query.search) {
                const regex = new RegExp(req.query.search, 'i');
                data = await Product.find({ name: regex }).slice(0, 10);
            } else {
                return res.status(401).json({
                    success: false,
                    message: 'Bad request',
                });
            }
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
            } else {
                res.status(404).json({
                    success: false,
                    message: 'NOT FOUND',
                });
            }
        } catch (error) {
            res.status(400);
        }
    }

    // get new Product
    async getNewProducts(req, res) {
        try {
            const data = await Product.find({ category: 'new_product' });
            if (data) {
                res.status(200).json({
                    success: true,
                    data,
                });
            }
        } catch (error) {
            res.status(400);
        }
    }

    // get new Polo
    async getNewPolo(req, res) {
        try {
            const data = (await Product.find({ category: 'product' })).splice(0, 4);
            if (data) {
                res.status(200).json({
                    success: true,
                    data,
                });
            }
        } catch (error) {
            res.status(400);
        }
    }
}

module.exports = new ProductController();
