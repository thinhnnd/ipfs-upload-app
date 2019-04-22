const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hashInfoSchema = new Schema({
    user: {
        type: Schema.Types.Object,
        required: true
    },
    ipfsHash: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('HashInfo', hashInfoSchema)