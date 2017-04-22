/**
 * Created by Jack on 3/16/17.
 */

import mongoose from 'mongoose'
import dbConnection from '../database'

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const CategoryModel = dbConnection.model('Category', CategorySchema);
export default CategoryModel;