import mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types
const TagSchema = mongoose.Schema({
  slug: {
    type: Types.String,
    lowercase: true,
    index: true,
    required: [true, "tag's slug cannot be empty"],
    unique: [true,"tag with this slug has exists"]
  },
  title: Types.String
}, {
  versionKey: false
})

export default dbConnection.model('tag', TagSchema)
