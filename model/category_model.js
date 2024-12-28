const prisma = require("../config/database");



// Create a new category
async function createCategory(name) {
    const category = await prisma.category.create({
        data: {
            name: name,
        },
    });
    return category.id;
}

// Get a category by ID
async function getCategoryById(id) {
    const category = await prisma.category.findUnique({
        where: { id: id },
    });
    return category;
}

// Get all categories
async function getAllCategories() {
    const categories = await prisma.category.findMany();
    return categories;
}

// Update a category
async function updateCategory(id, name) {
    const category = await prisma.category.update({
        where: { id: id },
        data: {
            name: name || undefined, // Use undefined to keep existing value if name is not provided
        },
    });
    return category;
}

// Delete a category
async function deleteCategory(id) {
    const result = await prisma.category.delete({
        where: { id: id },
    });
    return result ? 1 : 0; // Return 1 if deleted successfully, otherwise 0
}

module.exports = {
    createCategory,
    getCategoryById,
    getAllCategories,
    updateCategory,
    deleteCategory,
};