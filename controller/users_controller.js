const db = require("../config/db");


async function createUser(username, phone_number, email, password, type = 'client') {
    const query = `
        INSERT INTO users (username, phone_number, email, password, type)
        VALUES (?, ?, ?, ?,?)
    `;
    const [result] = await db.query(query, [username, phone_number, email, password, type]);
    return result.insertId;
}

// Get a user by ID
async function getUserById(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows[0];
}
async function getUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await db.query(query, [email]);
    return rows[0];
}
async function getUserByPhoneNumber(phone_number) {
    const query = 'SELECT * FROM users WHERE phone_number = ?';
    const [rows] = await db.query(query, [phone_number]);
    return rows[0];
}

// Get all users
async function getAllUsers() {
    const query = 'SELECT * FROM users';
    const [rows] = await db.query(query);
    return rows;
}

// Update a user
async function updateUser(id, username, phone_number, email, password, type) {
    const query = `
        UPDATE users
        SET 
            username = COALESCE(?, username),
            phone_number = COALESCE(?, phone_number),
            email = COALESCE(?, email),
            password = COALESCE(?, password),
            type = COALESCE(?, type)
        WHERE id = ?
    `;
    const [result] = await db.query(query, [username, phone_number, email, password, type, id]);
    return result.affectedRows;
}

// Delete a user
async function deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
}

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    getUserByPhoneNumber,
    updateUser,
    deleteUser,
    getUserByEmail,
};
