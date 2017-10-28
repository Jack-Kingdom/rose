const mongoose = require("mongoose");
const dbConnection = require("../database");

const Types = mongoose.Schema.Types;
const TagSchema = new mongoose.Schema({
    title: Types.String,
    createdAt: Types.Number,
    updatedAt: Types.Number
}, {
    versionKey: false
});

TagSchema.pre("save", next => {
    const now = Date.now();
    this.updatedAt = now;
    if (!this.createdAt) this.createdAt = now;
    next();
});

module.exports = dbConnection.model('tag', TagSchema)
