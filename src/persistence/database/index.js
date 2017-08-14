"use strict";

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import config from '../../../config';

// plug in bluebird as promise manager to sweep warning
// mongoose.Promise = bluebird;

let dbConnection = mongoose.createConnection(config.mongodbUrl);

export default dbConnection;