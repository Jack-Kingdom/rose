/*
  Session schema used to save session into mongodb.

  Info:
    1. Using this feature to avoid session lost after restart app.
    2. Session will be cached to improve performance
 */

import mongoose from 'mongoose'
import dbConnection from '../database'
import config from '../../../config'

const Types = mongoose.Schema.Types

const SessionSchema = mongoose.Schema({
  key: {
    type: Types.ObjectId,
    index: true,
    required: true
  },
  value: {
    type: Types.ObjectField()
  },
  createAt: {
    type: Types.Number,
    default: Date.now,
    expires: config.sessionTimeout
  }
}, {
  versionKey: false
})

export default dbConnection.model('relation', SessionSchema)
