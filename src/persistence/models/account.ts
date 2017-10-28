import * as mongoose from 'mongoose';
import {Document, Schema, Model, model} from "mongoose";
import * as isEmail from 'validator/lib/isEmail';
import dbConnection from '../database';

interface accountInterface {
    email: string
    firstName: string
    createdAt: number
    lastLogin: number
}

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

export default dbConnection.model('account', AccountSchema);
