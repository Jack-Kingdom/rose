/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'

let Types = mongoose.Schema.Types;

let TagSchema = mongoose.Schema({
    urlSlug: {
        type: Types.String,
        unique: true
    },
    name: Types.String,
});

module.exports = mongoose.model('tag', TagSchema);