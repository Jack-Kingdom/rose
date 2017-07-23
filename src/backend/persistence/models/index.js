/**
 * Created by Jack on 3/18/17.
 */

import mongoose from 'mongoose'
import config from '../../config'

mongoose.connect(config.mongodbUrl, {useMongoClient: true});

// wrap model in a class
const models = {
    Article: require('./article'),
    Category: require('./category'),
    Tag: require('./tag'),
    Account: require('./account'),
};

export default models;