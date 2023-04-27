const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Product = new Schema(
    {
        _id: { type: Number },
        name: { type: String, require: true },
        slug: { type: String, slug: 'name', unique: true },
        image: { type: String, require: true },
        price: { type: Number, require: true },
        sale: { type: Number },
        category: { type: String, require: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);

// add plugins
mongoose.plugin(slug);
Product.plugin(AutoIncrement);
Product.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Product', Product);
