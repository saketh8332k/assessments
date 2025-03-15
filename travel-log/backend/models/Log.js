const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    visitDate: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Log', LogSchema);