/*
  Relation schema described relationship between other collections.

  OriginId and targetId is record's _id value

  Notice:
    Remember add two record if a relation is double-sided:
      originId ---> targetId
      targetId ---> originId
 */

import mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types

const RelationSchema = mongoose.Schema({
  originId: {
    type: Types.ObjectId,
    index: true,
    required: true,
  },
  targetId: {
    type: Types.ObjectId,
    index: true,
    required: true
  }
}, {
  versionKey: false
})

export default dbConnection.model('relation', RelationSchema)
