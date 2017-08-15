
import mongoose from 'mongoose'

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

module.exports = mongoose.model('category', CategorySchema)
