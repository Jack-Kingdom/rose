import mongoose from 'mongoose'
import isEmail from 'validator/lib/isEmail'
import dbConnection from '../database'

const Types = mongoose.Schema.Types
const AccountSchema = mongoose.Schema({
  email: {
    type: Types.String,
    required: [true, 'Email cannot be empty'],
    unique: [true, 'Email has been signed up'],
    index: true,
    validate: {
      isAsync: false,
      validator: isEmail,
      message: 'Email not valid'
    }
  },
  password: {
    type: Types.String,
    required: [true, 'Password cannot be empty']
  },
  createdAt: Types.Number,
  lastLogin: Types.Number
})

module.exports = dbConnection.model('account', AccountSchema)
