"use strict";

import mongoose from 'mongoose'
import models from "./index";

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
    contentType: String,
    data: Types.Buffer,
});

models.exports = mongoose.model('media', mediaSchema);