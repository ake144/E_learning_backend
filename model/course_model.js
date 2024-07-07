const db=require('../config/db')


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
    // const query = 'SELECT * FROM course WHERE id = ?';
    const query= `SELECT 
    course.*, 
    users.username AS user_name, 
    category.name AS category_name
FROM 
    course
JOIN 
    users ON course.user_id = users.id
JOIN 
    category ON course.category_id = category.id
    WHERE
    course.id = ?
`

    
    const [rows] = await db.query(query, [id]);
    return rows[0];
}

// Get all courses
async function getAllCourses() {
    // const query = 'SELECT * FROM course';
   const query= `SELECT 
    course.*, 
    users.username AS user_name, 
    category.name AS category_name
FROM 
    course
JOIN 
    users ON course.user_id = users.id
JOIN 
    category ON course.category_id = category.id;
`
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

async function getPurchasedCoursesByUserId(user_id) {
     const query=`SELECT * FROM purchased WHERE user_id = ?`;
     const [rows] = await db.query(query, [user_id]);
     const [courses]=await db.query( `SELECT * FROM course WHERE id IN (${rows.map(row => row.course_id).join(',')})`);
     return courses;

}
async function createPurchasedCourse(user_id, course_id) {
    const isPurchased = await db.query('SELECT * FROM purchased WHERE user_id = ? AND course_id = ?', [user_id, course_id]);
    if (isPurchased[0].length > 0) {
        throw new Error('Course already purchased');
    }
    const query = 'INSERT INTO purchased (user_id, course_id) VALUES (?, ?)';
    const [result] = await db.query(query, [user_id, course_id]);
    return result.insertId;
}

module.exports = {
    createCourse,
    getCourseById,
    getAllCourses,
    updateCourse,
    deleteCourse,
    getCoursesByCategoryId,
    getPurchasedCoursesByUserId,
    createPurchasedCourse
};
