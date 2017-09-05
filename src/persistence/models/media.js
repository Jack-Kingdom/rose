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
  mimetype: Types.String,
  data: Types.Buffer,
  size: Types.Number
}, {
  versionKey: false
})

export default dbConnection.model('media', mediaSchema)
