"use strict";

import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const Types = mongoose.Schema.Types;
const AccountSchema = mongoose.Schema({
    email: {
        type: Types.String,
        required: [true, 'Email cannot be empty'],
        unique: [true, 'Email has been signed up'],
        index: true,
        validate: {
            isAsync: false,
            validator: isEmail,
            message: 'Email not valid'
        },
    },
    password: {
        type: Types.String,
        required: [true, 'Password cannot be empty'],
        min: [8, 'password is too short'],
        max: [100, 'password is too long'],

    },
    createdAt: Types.Number,
    lastLogin: Types.Number,
});

module.exports = mongoose.model('account', AccountSchema);