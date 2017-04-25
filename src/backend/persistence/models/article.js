/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'
import dbConnection from '../database'

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    slug: {
        type: String,
        required: true,
        unique:true,
    },
    content: {
        type: String,
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
    },
    tagIds: {
        type: [{type: mongoose.Schema.ObjectId}],
    },
    status: {
        type: String,
        enumValues: ['published', 'draft', 'deleted'],
        defaultValue: 'draft'
    },
    createdAt: {
        type: Date,
        defaultValue: new Date(),
    },
    updatedAt: {
        type: Date,
    },
    allowComments: {
        type: Boolean,
        defaultValue: true,
    }
});

const ArticleModel = dbConnection.model('Article', ArticleSchema);

export default ArticleModel;