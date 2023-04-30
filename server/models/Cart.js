const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Cart = new Schema(
    {
        _id: Number,
        quantity: { type: Number, require: true },
        price: { type: Number, require: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);

// add plugins
Product.plugin(AutoIncrement);
Cart.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Cart', Cart);
