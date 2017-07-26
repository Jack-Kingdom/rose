/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'

let Types = mongoose.Schema.Types;

let AccountSchema = mongoose.Schema({
    email: {
        type: Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Types.String,
        required: true,
        minlength: 8,
    },
    createdAt: Types.Number,
    lastLogin: Types.Number,
});

module.exports = mongoose.model('account', AccountSchema);