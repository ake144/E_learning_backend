const categoryModel = require('../model/category_model'); // Adjust the path as per your file structure

// Create a new category
async function createCategory(req, res) {
    const { name } = req.body;
    const newCategoryId = await categoryModel.createCategory(name);
    res.status(201).json({ id: newCategoryId });
}

// Get a category by ID
async function getCategoryById(req, res) {
    const category = await categoryModel.getCategoryById(req.params.id);
    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
}

// Get all categories
async function getAllCategories(req, res) {
    const categories = await categoryModel.getAllCategories();
    res.status(200).json(categories);
}

// Update a category
async function updateCategory(req, res) {
    const { name } = req.body;
    const updatedRows = await categoryModel.updateCategory(req.params.id, name);
    if (updatedRows > 0) {
        res.status(200).json({ message: 'Category updated successfully' });
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
}

// Delete a category
async function deleteCategory(req, res) {
    const deletedRows = await categoryModel.deleteCategory(req.params.id);
    if (deletedRows > 0) {
        res.status(200).json({ message: 'Category deleted successfully' });
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
}

module.exports = {
    createCategory,
    getCategoryById,
    getAllCategories,
    updateCategory,
    deleteCategory
};
