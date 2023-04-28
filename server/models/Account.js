const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Account = new Schema(
    {
        user_name: { type: String, require: true },
        password: { type: String, require: true },
    },
    {
        timestamps: true,
    },
);

// add plugins
Account.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Account', Account);
