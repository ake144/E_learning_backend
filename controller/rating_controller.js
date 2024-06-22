const ratingModel = require('../model/rating_model'); // Adjust the path as per your file structure

// Create a new rating
async function createRating(req, res) {
    const { course_id, reviewer_id, value, message } = req.body;
    try {
        const newRatingId = await ratingModel.createRating(course_id, reviewer_id, value, message);
        res.status(201).json({ id: newRatingId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get a rating by ID
async function getRatingById(req, res) {
    try {
        const rating = await ratingModel.getRatingById(req.params.id);
        if (rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'Rating not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get all ratings
async function getAllRatings(req, res) {
    try {
        const ratings = await ratingModel.getAllRatings();
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a rating
async function updateRating(req, res) {
    const { course_id, reviewer_id, value, message } = req.body;
    try {
        const updatedRows = await ratingModel.updateRating(req.params.id, course_id, reviewer_id, value, message);
        if (updatedRows > 0) {
            res.status(200).json({ message: 'Rating updated successfully' });
        } else {
            res.status(404).json({ message: 'Rating not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete a rating
async function deleteRating(req, res) {
    try {
        const deletedRows = await ratingModel.deleteRating(req.params.id);
        if (deletedRows > 0) {
            res.status(200).json({ message: 'Rating deleted successfully' });
        } else {
            res.status(404).json({ message: 'Rating not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createRating,
    getRatingById,
    getAllRatings,
    updateRating,
    deleteRating
};
