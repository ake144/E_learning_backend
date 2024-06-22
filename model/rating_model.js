const db = require("../config/db");


// Create a new rating
async function createRating(course_id, reviewer_id, value, message) {
    const query = `
        INSERT INTO rating (course_id, reviewer_id, created_at, value, message)
        VALUES (?, ?, current_timestamp(), ?, ?)
    `;
    const [result] = await db.query(query, [course_id, reviewer_id, value, message]);
    return result.insertId;
}

// Get a rating by ID
async function getRatingById(id) {
    const query = 'SELECT * FROM rating WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows[0];
}

// Get all ratings
async function getAllRatings() {
    const query = 'SELECT * FROM rating';
    const [rows] = await db.query(query);
    return rows;
}

// Update a rating
async function updateRating(id, course_id, reviewer_id, value, message) {
    const query = `
        UPDATE rating
        SET 
            course_id = COALESCE(?, course_id),
            reviewer_id = COALESCE(?, reviewer_id),
            value = COALESCE(?, value),
            message = COALESCE(?, message)
        WHERE id = ?
    `;
    const [result] = await db.query(query, [course_id, reviewer_id, value, message, id]);
    return result.affectedRows;
}

// Delete a rating
async function deleteRating(id) {
    const query = 'DELETE FROM rating WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
}

module.exports = {
    createRating,
    getRatingById,
    getAllRatings,
    updateRating,
    deleteRating
};
