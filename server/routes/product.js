const express = require('express');
const multer = require('multer');

const router = express.Router();

const imgConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}. ${file.originalname}`);
    },
});

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true);
    } else {
        callback(new Error('Only images is allowd'));
    }
};

const upload = multer({
    storage: imgConfig,
    fileFilter: isImage,
});

const ProductController = require('../controller/ProductController');

// get all
router.get('/', ProductController.getAll);

// get new products
router.get('/new', ProductController.getNewProducts);

// get 4 new polo
router.get('/new_polo', ProductController.getNewPolo);

// create
router.post('/create', upload.single('image'), ProductController.create);

// detail
router.get('/:slug', ProductController.detail);

module.exports = router;
