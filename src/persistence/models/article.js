import mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types

const ArticleSchema = mongoose.Schema({
  slug: {
    type: Types.String,
    lowercase: true,
    index: true,
    required: true,
    unique: true
  },
  title: {
    type: Types.String,
    default: 'Untitled',
  },
  content: Types.String,
  renderedContent: Types.String,
  category: {
    type: Types.ObjectId,
    ref: 'category'
  },
  tags: [{
    type: Types.ObjectId,
    ref: 'tags'
  }],
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
})

export default dbConnection.model('article', ArticleSchema)
