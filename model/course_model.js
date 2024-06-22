const mysql = require('mysql2');



// Create a new course
async function createCourse(image_url,short_video_url,title, level, language, duration, trending, price, old_price, content, category_id, user_id) {
    const query = `
        INSERT INTO course (title, level, language, duration, trending, price, old_price, content, created_at, category_id, user_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, current_timestamp(), ?, ?)
    `;
    const [result] = await db.query(query, [title, level, language, duration, trending, price, old_price, content, category_id, user_id]);
    return result.insertId;
}

// Get a course by ID
async function getCourseById(id) {
    const query = 'SELECT * FROM course WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows[0];
}

// Get all courses
async function getAllCourses() {
    const query = 'SELECT * FROM course';
    const [rows] = await db.query(query);
    return rows;
}

// Update a course
async function updateCourse(id, title, level, language, duration, trending, price, old_price, content, category_id, user_id) {
    const query = `
        UPDATE course
        SET 
            title = COALESCE(?, title),
            level = COALESCE(?, level),
            language = COALESCE(?, language),
            duration = COALESCE(?, duration),
            trending = COALESCE(?, trending),
            price = COALESCE(?, price),
            old_price = COALESCE(?, old_price),
            content = COALESCE(?, content),
            category_id = COALESCE(?, category_id),
            user_id = COALESCE(?, user_id)
        WHERE id = ?
    `;
    const [result] = await db.query(query, [title, level, language, duration, trending, price, old_price, content, category_id, user_id, id]);
    return result.affectedRows;
}

// Delete a course
async function deleteCourse(id) {
    const query = 'DELETE FROM course WHERE id = ?';
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
}

async function getCoursesByCategoryId(category_id) {
    const query = 'SELECT * FROM course WHERE category_id = ?';
    const [rows] = await db.query(query, [category_id]);
    return rows;
}

module.exports = {
    createCourse,
    getCourseById,
    getAllCourses,
    updateCourse,
    deleteCourse,
    getCoursesByCategoryId
};
