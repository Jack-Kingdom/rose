/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'

let ArticleSchema = mongoose.Schema({
    urlSlug: {
        type: String,
        required: true,
        unique: true,
    },
    title: String,
    content: String,
    renderedContent: String,
    status: {
        type: String,
        enum: ['published', 'draft', 'deleted']
    },
    createdAt: Number,
    updatedAt: Number,
});

module.exports = mongoose.model('article', ArticleSchema);