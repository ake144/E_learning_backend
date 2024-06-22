
const db = require("../config/db");

// Create a new category
async function createCategory(name) {
    const query = `
        INSERT INTO category (name, created_at)
        VALUES (?, current_timestamp())
    `;
    const [result] = await db.query(query, [name]);
    return result.insertId;
}

// Get a category by ID
async function getCategoryById(id) {
    const query = 'SELECT * FROM category WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows[0];
}

// Get all categories
async function getAllCategories() {
    const query = 'SELECT * FROM category';
    const [rows] = await db.query(query);
    return rows;
}

// Update a category
async function updateCategory(id, name) {
    const query = `
        UPDATE category
        SET 
            name = COALESCE(?, name)
        WHERE id = ?
    `;
    const [result] = await db.query(query, [name, id]);
    return result.affectedRows;
}

// Delete a category
async function deleteCategory(id) {
    const query = 'DELETE FROM category WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
}

module.exports = {
    createCategory,
    getCategoryById,
    getAllCategories,
    updateCategory,
    deleteCategory
};
