/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'
import dbConnection from '../database'

const AccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const AccountModel = dbConnection.model('Account', AccountSchema);
export default AccountModel;