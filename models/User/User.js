const mongoose = require('mongoose');

const UsuarioSchema =  mongoose.Schema({
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
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
