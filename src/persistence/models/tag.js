import mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types
const TagSchema = mongoose.Schema({
  slug: {
    type: Types.String,
    lowercase: true,
    index: true,
    required: true,
    unique: true
  },
  title: Types.String
})

export default dbConnection.model('tag', TagSchema)
