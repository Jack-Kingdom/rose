/**
 * Created by Jack on 12/18/16.
 */

import mongoose from 'mongoose'
import dbConnection from '../database'

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
    },
    slug: {
        type: String,
    },
    content: {
        type: String,
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
    },
    tagIds: {
        type: Array,
    },
    status: {
        type: String,
        enumValues: ['published', 'draft', 'deleted']
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
    }
});

const ArticleModel = dbConnection.model('Article', ArticleSchema);

export default ArticleModel;