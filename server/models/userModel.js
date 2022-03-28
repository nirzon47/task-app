const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email address'],
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    }, 
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema);