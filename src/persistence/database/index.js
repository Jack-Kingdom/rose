

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import config from '../../../config';

// plug in bluebird as promise manager to sweep warning
// mongoose.Promise = bluebird;

const dbConnection = mongoose.createConnection(config.mongodbUrl);

export default dbConnection;
