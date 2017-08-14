
import mongoose from 'mongoose'

const Types = mongoose.Schema.Types

const ArticleSchema = mongoose.Schema({
  title: {
    type: Types.String,
    required: true
  },
  slug: {
    type: Types.String,
    index: true,
    required: true,
    unique: true
  },
  content: Types.String,
  renderedContent: Types.String,
  tags: [{
    type: Types.ObjectId,
    ref: 'tags'
  }],
  category: {
    type: Types.ObjectId,
    ref: 'category'
  },
  status: {
    type: Types.String,
    enum: ['published', 'draft', 'removed'],
    defaultValue: 'draft'
  },
  allowComments: {
    type: Types.Boolean,
    defaultValue: true
  },
  createdAt: Types.Number,
  updatedAt: Types.Number
})

module.exports = mongoose.model('article', ArticleSchema)
