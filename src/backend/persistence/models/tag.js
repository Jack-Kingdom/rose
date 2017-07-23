/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'

let Types = mongoose.Schema.Types;

let TagSchema = mongoose.Schema({
    slug: {
        type: Types.String,
        lowercase: true,
        index: true,
        required: true,
        unique: true,
    },
    name: Types.String,
});

module.exports = mongoose.model('tag', TagSchema);