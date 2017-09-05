import mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types

const ArticleSchema = mongoose.Schema({
  slug: {
    type: Types.String,
    lowercase: true,
    index: true,
    required: [true, "article's slug cannot be empty"],
    unique: [true,"article with this slug has exists"]
  },
  title: {
    type: Types.String,
    default: 'Untitled'
  },
  content: Types.String,
  renderedContent: Types.String,
  category: Types.String,
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
})

export default dbConnection.model('article', ArticleSchema)
