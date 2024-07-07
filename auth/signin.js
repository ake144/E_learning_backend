const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../model/users_model'); // Adjust the path as per your file structure

// Register a new user
 async function register (req, res) {
    const { Fname,Lname, phone_number, email, password, type } = req.body;

    try {
        // Check if user already exists with the given email
        const existingUser = await userModel.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const userId = await userModel.createUser(Fname,Lname, phone_number, email, hashedPassword, type);

        // Respond with success message
        res.status(201).json({ id: userId, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 
}


module.exports = {
    register
};

