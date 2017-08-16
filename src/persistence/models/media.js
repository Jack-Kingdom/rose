
import mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types
const mediaSchema = mongoose.Schema({
  slug: {
    type: Types.String,
    lowercase: true,
    index: true,
    required: true,
    unique: true
  },
  // todo consider this, maybe add alt support at next version
  // alt:Types.String,
  mimetype: Types.String,
  data: Types.Buffer,
  size: Types.Number
})

module.exports = dbConnection.model('media', mediaSchema)
