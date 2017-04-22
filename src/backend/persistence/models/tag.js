/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'
import dbConnection from '../database'

const TagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
});

const TagModel = dbConnection.model('Tag', TagSchema);
export default TagModel;