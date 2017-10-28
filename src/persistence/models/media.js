const mongoose = require("mongoose");
const dbConnection = require("../database");

const Types = mongoose.Schema.Types;
const mediaSchema = new mongoose.Schema({
    hash: {
        type: Types.String,
        index: true,
        required: true,
        unique: true
    },
    mimetype: Types.String,
    data: Types.Buffer,
    size: Types.Number
}, {
    versionKey: false
});

module.exports = dbConnection.model('media', mediaSchema);
