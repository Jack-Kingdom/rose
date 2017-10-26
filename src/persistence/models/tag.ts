import * as mongoose from 'mongoose'
import dbConnection from '../database'

const Types = mongoose.Schema.Types;
const TagSchema = new mongoose.Schema({
    uuid: {
        type: Types.String,
        index: true,
        required: true,
        unique: true
    },
    title: Types.String
}, {
    versionKey: false
});

export default dbConnection.model('tag', TagSchema)
