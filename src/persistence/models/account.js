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
    createdAt: Types.Number,
    lastLogin: Types.Number
}, {
    versionKey: false
});

AccountSchema.pre("save", next => {
    const now = Date.now();
    this.lastLogin = now;
    if (!this.createdAt) this.createdAt = now;
    next();
});

module.exports = dbConnection.model('account', AccountSchema);
