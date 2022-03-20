const mongoose = require('mongoose');

const ProducSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

ProducSchema.index({ name: 'text' });

module.exports = mongoose.model('Product', ProducSchema);
