const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../model/users_model'); // Adjust the path as per your file structure


// Login function
async function login(req, res) {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await userModel.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare entered password with hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, 'SREESRCOM', { expiresIn: '1h' });

        // Set cookie with the JWT token
        res.cookie('JWTELARN', token, { httpOnly: true});

        // Respond with success message
        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Register a new user
 async function register (req, res) {
    const { username, phone_number, email, password, type } = req.body;

    try {
        // Check if user already exists with the given email
        const existingUser = await userModel.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const userId = await userModel.createUser(username, phone_number, email, hashedPassword, type);

        // Respond with success message
        res.status(201).json({ id: userId, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 
}




module.exports = {
    login,
    register
};
