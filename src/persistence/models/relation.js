/*
  Relation schema described relationship between other collections.

  OriginId and targetId is record's _id value

  Notice:
    1. Remember add two record if a relation is double-sided:
      originId ---> targetId
      targetId ---> originId
    2. Do not use this if you cannot separate target from multi collections.

  Info:
    1. This collection only used to describe article and tag's relation on current version.
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
