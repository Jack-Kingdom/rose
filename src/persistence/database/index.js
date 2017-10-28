const mongoose = require("mongoose");
const config = require("../../../config");

// plug in ES6 native promise manager to sweep warning
mongoose.Promise = Promise;

const options = {
    useMongoClient: true
};

const dbConnection = mongoose.createConnection(config.mongodbUrl, options);

module.exports = dbConnection;
