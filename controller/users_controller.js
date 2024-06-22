const userModel = require('../model/users_model'); // Adjust the path as per your file structure

// Create a new user
async function createUser(req, res) {
    const { username, phone_number, email, password, type } = req.body;
    try {
        const newUserId = await userModel.createUser(username, phone_number, email, password, type);
        res.status(201).json({ id: newUserId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get a user by ID
async function getUserById(req, res) {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get a user by phone number
async function getUserByPhoneNumber(req, res) {
    try {
        const user = await userModel.getUserByPhoneNumber(req.params.phone_number);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get all users
async function getAllUsers(req, res) {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a user
async function updateUser(req, res) {
    const { username, phone_number, email, password, type } = req.body;
    try {
        const updatedRows = await userModel.updateUser(req.params.id, username, phone_number, email, password, type);
        if (updatedRows > 0) {
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete a user
async function deleteUser(req, res) {
    try {
        const deletedRows = await userModel.deleteUser(req.params.id);
        if (deletedRows > 0) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createUser,
    getUserById,
    getUserByPhoneNumber,
    getAllUsers,
    updateUser,
    deleteUser
};
