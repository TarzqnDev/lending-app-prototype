const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const router = express.Router();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

function generateEmailVerification() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendEmailVerification(to, code) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: `"Accord" <${process.env.EMAIL_USER}>`,
        to,
        subject: 'Your Verification Code',
        text: `Your verification code is: ${code}. It will expire in 5 minutes.`,
        html: `<p>Your verification code is: <b>${code}</b></p><p>This code will expire in 5 minutes.</p>`
    });
}

router.post('/register', async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    } 

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Password does not match' });
    }

    if (!passwordRegex.test(password)) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'});
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const verificationCode = generateEmailVerification();
        const expires = new Date(Date.now() + 5 * 60 * 1000);

        const newUser = new User({
            email,
            password: hashedPassword,
            verificationCode,
            verificationCodeExpires: expires
        });

        await newUser.save();
        await sendEmailVerification(email, verificationCode);

        res.status(201).json({ 
            message: 'User registered successfuly', 
            userId: newUser._id 
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/login', async (req, res) => {

    const { email, password} = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        res.status(200).json({
            message: 'Successful Login',
            userId: user._id
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }

});


router.post('/emailVerification', async (req, res) => {

    const {email, code} = req.body;

    if (!email || !code) {
        return res.status(400).json({ message: 'Enter the code sent to your email' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        if (user.isVerified) {
            return res.status(400).json({ message: 'Email already verified' });
        }

        if (user.verificationCode !== code){
            return res.status(400).json({ message: 'Invalid code' });
        }

        if (new Date() > user.verificationCodeExpires) {
            return res.status(400).json({ message: 'Code expired' });
        }

        user.isVerified = true;
        user.verificationCode = undefined;
        user.verificationCodeExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Email verified successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

});

module.exports = router;