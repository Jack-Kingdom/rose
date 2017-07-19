/**
 * Created by Jack on 3/16/17.
 */

import mongoose from 'mongoose'

let CategorySchema = mongoose.Schema({
    urlSlug:{
        type:String,
        unique:true
    },
    name:String,
});

module.exports = mongoose.model('category', CategorySchema);