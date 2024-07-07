 const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../model/users_model');


// Register a new user
async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await userModel.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id, email: user.email,Fname: user.Fname, Lname: user.Lname }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('JWTELARN', token, { httpOnly: true });
        res.status(200).json({
          id: user.id,
          email: user.email,
          Fname: user.Fname,
          Lname: user.Lname,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Register a new user
 async function register (req, res) {
    const { Fname,Lname, email, password, type } = req.body;

    try {
        // Check if user already exists with the given email
        const existingUser = await userModel.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);


        // Create a new user
        const userId = await userModel.createUser(Fname, Lname, email, hashedPassword, type);

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
