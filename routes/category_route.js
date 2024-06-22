const express = require('express');
const router = express.Router();
const courseController=require('../controller/category_controller')
const  {checkError}=require('../utils/error_checker')

router.get('/',checkError(courseController.getAllCategories))
router.get('/:id',checkError(courseController.getCategoryById))
router.post('/',checkError(courseController.createCategory))
router.put('/:id',checkError(courseController.updateCategory))
router.delete('/:id',checkError(courseController.deleteCategory))


module.exports=router