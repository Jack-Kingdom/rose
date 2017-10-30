const mongoose = require("mongoose");
const dbConnection = require("../database");

const Types = mongoose.Schema.Types;
const TagSchema = new mongoose.Schema({
    title: Types.String,
    createdAt: {
        type: Types.Number,
        default: Date.now()
    },
    updatedAt: Types.Number
}, {
    versionKey: false
});

module.exports = dbConnection.model('tag', TagSchema);
