const prisma =  require("../config/db");


// Create a new course
async function createCourse(image_url, short_video_url, title, level, language, duration, trending, price, old_price, content, category_id, user_id) {
    const course = await prisma.course.create({
        data: {
            title,
            level,
            language,
            duration,
            trending,
            price,
            old_price,
            content,
            categoryId: category_id,
            userId: user_id,
        },
    });
    return course.id;
}

// Get a course by ID
async function getCourseById(id) {
    const course = await prisma.course.findUnique({
        where: { id },
        include: {
            // user: { select: { Fname: true } },
            category: { select: { name: true } },
        },
    });
    return course;
}

// Get all courses
async function getAllCourses() {
    const courses = await prisma.course.findMany({
        include: {
            category: { select: { name: true } },
        },
    });
    return courses;
}

// Update a course
async function updateCourse(id, title, level, language, duration, trending, price, old_price, content, category_id, user_id) {
    const course = await prisma.course.update({
        where: { id },
        data: {
            title: title || undefined,
            level: level || undefined,
            language: language || undefined,
            duration: duration || undefined,
            trending: trending || undefined,
            price: price || undefined,
            old_price: old_price || undefined,
            content: content || undefined,
            categoryId: category_id || undefined,
            userId: user_id || undefined,
        },
    });
    return course;
}

// Delete a course
async function deleteCourse(id) {
    const result = await prisma.course.delete({
        where: { id },
    });
    return result ? 1 : 0; // Return 1 if deleted successfully, otherwise 0
}

// Get courses by category ID
async function getCoursesByCategoryId(category_id) {
    const courses = await prisma.course.findMany({
        where: { categoryId: category_id },
    });
    return courses;
}

// Get purchased courses by user ID
async function getPurchasedCoursesByUserId(user_id) {
    const purchasedCourses = await prisma.purchased.findMany({
        where: { userId: user_id },
        include: { course: true },
    });

    return purchasedCourses.map(p => p.course);
}

// Create purchased course
async function createPurchasedCourse(user_id, course_id) {
    const isPurchased = await prisma.purchased.findUnique({
        where: {
            userId_courseId: {
                userId: user_id,
                courseId: course_id,
            },
        },
    });

    if (isPurchased) {
        throw new Error('Course already purchased');
    }

    const purchased = await prisma.purchased.create({
        data: {
            userId: user_id,
            courseId: course_id,
        },
    });
    return purchased.id;
}

module.exports = {
    createCourse,
    getCourseById,
    getAllCourses,
    updateCourse,
    deleteCourse,
    getCoursesByCategoryId,
    getPurchasedCoursesByUserId,
    createPurchasedCourse,
};