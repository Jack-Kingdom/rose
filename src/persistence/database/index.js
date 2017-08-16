import mongoose from 'mongoose'
import config from '../../../config'

// plug in ES6 native promise manager to sweep warning
mongoose.Promise = Promise

const options = {
  useMongoClient: true
}

const dbConnection = mongoose.createConnection(config.mongodbUrl, options)

export default dbConnection
