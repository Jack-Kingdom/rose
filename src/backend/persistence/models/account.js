/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'

let AccountSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    createdAt: Number,
    lastLogin: Number,
});

module.exports = mongoose.model('account', AccountSchema);