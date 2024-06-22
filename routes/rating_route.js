const express = require('express');
const router = express.Router();
const ratingController=require('../controller/rating_controller')
const  {checkError}=require('../utils/error_checker')


router.get('/',checkError(ratingController.getAllRatings))
router.get('/:id',checkError(ratingController.getRatingById))
router.post('/',checkError(ratingController.createRating))//cant be updated number value
router.put('/:id',checkError(ratingController.updateRating))
router.delete('/:id',checkError(ratingController.deleteRating))



module.exports=router

