const mongoose = require("mongoose");
const dbConnection = require("../database");

const Types = mongoose.Schema.Types;
const ArticleSchema = new mongoose.Schema({
    slug: {
        type:Types.String,
        required: true,
        unique: true,
        index: true,
    },
    title: {
        type: Types.String,
        default: 'Untitled'
    },
    content: Types.String,
    renderedContent: Types.String,
    tags: {
        type: Types.ObjectId,
        ref: 'tag'
    },
    status: {
        type: Types.String,
        enum: ['published', 'draft', 'removed'],
        default: 'draft'
    },
    allowComments: {
        type: Types.Boolean,
        defaultValue: true
    },
    createdAt: {
        type: Types.Number,
        default: Date.now()
    },
    updatedAt: Types.Number
}, {
    versionKey: false
});

module.exports = dbConnection.model('article', ArticleSchema);
