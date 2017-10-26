import * as mongoose from 'mongoose'
import Config from '../../../config'

// plug in ES6 native promise manager to sweep warning
// mongoose.Promise = Promise

const options = {
    useMongoClient: true
};

const dbConnection = mongoose.createConnection(Config.mongodbUrl, options);

export default dbConnection;
