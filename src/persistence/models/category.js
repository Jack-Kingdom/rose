import mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types

const CategorySchema = mongoose.Schema({
  slug: {
    type: Types.String,
    lowercase: true,
    index: true,
    required: true,
    unique: true
  },
  name: Types.String
})

export default dbConnection.model('category', CategorySchema)
