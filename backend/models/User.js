const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String
    },
    verificationCodeExpires: {
        type: Date
    },
    information: {
        firstName: String,
        lastName: String,
        dob: Date,
        nationality: String,
        country: String,
        mobile: String
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);