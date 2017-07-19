/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'

let TagSchema = mongoose.Schema({
    urlSlug:{
        type:String,
        unique:true
    },
    name:String,
});

module.exports = mongoose.model('tag', TagSchema);