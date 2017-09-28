import mongoose from 'mongoose'
import uuidV4 from 'uuid/v4'
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
  uuid: {
    type: Types.String,
    default: uuidV4()
  },
  mimetype: Types.String,
  data: Types.Buffer,
  size: Types.Number
}, {
  versionKey: false
})

export default dbConnection.model('media', mediaSchema)
