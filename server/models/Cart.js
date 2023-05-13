const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Cart = new Schema(
    {
        item_id: { type: Number, unique: true },
        user_id: { type: Schema.ObjectId, ref: 'Account' },
        product_id: { type: Number, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        size: { type: String, require: true },
        total_price: { type: Number, required: true },
    },
    {
        timestamps: true,
    },
);

// add plugins
Cart.plugin(AutoIncrement, { inc_field: 'item_id' });
Cart.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Cart', Cart);
