"use strict";

import mongoose from 'mongoose';

const Types = mongoose.Schema.Types;
const mediaSchema = mongoose.Schema({
    slug: {
        type: Types.String,
        lowercase: true,
        index: true,
        required: true,
        unique: true
    },
    //todo consider this, maybe add alt support at next version
    // alt:Types.String,
    mimetype: Types.String,
    data: Types.Buffer,
    size: Types.Number
});

module.exports = mongoose.model('media', mediaSchema);