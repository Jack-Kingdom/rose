import * as mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types;

const ArticleSchema = new mongoose.Schema({
  uuid: {
    type: Types.String,
    index: true,
    required: true,
    unique: true
  },
  title: {
    type: Types.String,
    default: 'Untitled'
  },
  content: Types.String,
  renderedContent: Types.String,
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

export default dbConnection.model('article', ArticleSchema)
