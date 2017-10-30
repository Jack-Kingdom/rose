const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");
const dbConnection = require("../database");

const Types = mongoose.Schema.Types;
const AccountSchema = new mongoose.Schema({
    email: {
        type: Types.String,
        required: [true, 'Email cannot be empty'],
        unique: [true, 'Email has been signed up'],
        index: true,
        validate: {
            isAsync: false,
            validator: isEmail,
            message: 'Email illegal.'
        }
    },
    password: {
        type: Types.String,
        required: [true, 'Password cannot be empty']
    },
    createdAt: {
        type: Types.Number,
        default: Date.now()
    },
    lastLogin: Types.Number
}, {
    versionKey: false
});

module.exports = dbConnection.model('account', AccountSchema);
