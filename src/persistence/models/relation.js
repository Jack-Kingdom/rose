/*
  Relation schema described relationship between articles and tags.
  All relation is double-sided.
 */

import mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types

const RelationSchema = mongoose.Schema({
  articleSlug: {
    type: Types.String,
    index: true,
    required: true,
  },
  tagSlug: {
    type: Types.String,
    index: true,
    required: true
  }
})

export default dbConnection.model('relation', RelationSchema)
