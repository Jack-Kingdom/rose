/**
 * Created by Jack on 3/16/17.
 */

import mongoose from 'mongoose'

let Types = mongoose.Schema.Types;

let CategorySchema = mongoose.Schema({
    slug: {
        type: Types.String,
        lowercase: true,
        index: true,
        required: true,
        unique: true,
    },
    name: Types.String,
});

module.exports = mongoose.model('category', CategorySchema);