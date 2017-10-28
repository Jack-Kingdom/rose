import * as mongoose from 'mongoose';
import * as uuid from 'uuid';
import dbConnection from '../database';

const Types = mongoose.Schema.Types;

const ArticleSchema = new mongoose.Schema({
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
    createdAt: Types.Number,
    updatedAt: Types.Number
}, {
    versionKey: false
});

ArticleSchema.pre("save", next => {
    const now = Date.now();
    this.updatedAt = now;
    if (!this.createdAt) this.createdAt = now;
    if (!this.uuid) this.uuid.
    next();
});

export default dbConnection.model('article', ArticleSchema)
