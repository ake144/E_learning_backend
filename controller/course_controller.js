const courseModel = require('../model/course_model');

// Create a new course
async function createCourse(req, res) {
    const { title, level, language, duration,image_url,short_video_url,trending, price, old_price,content,category_id, user_id} = req.body;
    const newCourseId = await courseModel.createCourse(image_url,short_video_url,title, level, language, duration, trending, price, old_price, content, category_id, user_id);
    res.status(201).json({ id: newCourseId });
}

// Get a course by ID
async function getCourseById(req, res) {
    const course = await courseModel.getCourseById(req.params.id);
    if (course) {
        res.status(200).json(course);
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
}

// Get all courses
async function getAllCourses(req, res) {
    const courses = await courseModel.getAllCourses();
    res.status(200).json({courses});
}

// Get courses by category ID
async function getCoursesByCategoryId(req, res) {
    const courses = await courseModel.getCoursesByCategoryId(req.params.categoryId);
    res.status(200).json(courses);
}

// Update a course
async function updateCourse(req, res) {
    const { title, level, language, duration, trending, price, old_price, content, category_id, user_id } = req.body;
    const updatedRows = await courseModel.updateCourse(req.params.id, title, level, language, duration, trending, price, old_price, content, category_id, user_id);
    if (updatedRows > 0) {
        res.status(200).json({ message: 'Course updated successfully' });
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
}

// Delete a course
async function deleteCourse(req, res) {
    const deletedRows = await courseModel.deleteCourse(req.params.id);
    if (deletedRows > 0) {
        res.status(200).json({ message: 'Course deleted successfully' });
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
}

module.exports = {
    createCourse,
    getCourseById,
    getAllCourses,
    getCoursesByCategoryId,
    updateCourse,
    deleteCourse
};



// const content={about:'',requrement:['','',''],who:['',''],content:{title:'intro',lessons:[{title:'lesson1'},title:{'lesson2'}]}]}