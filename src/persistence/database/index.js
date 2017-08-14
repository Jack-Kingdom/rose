import mongoose from 'mongoose'
import bluebird from 'bluebird'
import config from '../../../config'

// plug in bluebird as promise manager to sweep warning
const options = {promiseLibrary: bluebird}

const dbConnection = mongoose.createConnection(config.mongodbUrl, options)

export default dbConnection
