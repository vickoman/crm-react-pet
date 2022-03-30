const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    telephone: {
        type: String,
        required: false,
        trim: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Client', ClientSchema);
