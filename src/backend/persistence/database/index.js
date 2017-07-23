/**
 * Created by Jack on 3/17/17.
 */

import mongoose from 'mongoose'
import bluebird from 'bluebird'
import config from '../../config'

// plug in bluebird as promise manager to sweep warning
// mongoose.Promise = bluebird;

let dbConnection = mongoose.createConnection(config.mongodbUrl);

export default dbConnection;