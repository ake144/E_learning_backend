const express = require('express');
const router = express.Router();
const courseController=require('../controller/course_controller')
const  {checkError}=require('../utils/error_checker')

router.get('/',checkError(courseController.getAllCourses))
router.get('/:id',checkError(courseController.getCourseById))
router.get('/purchased/:userId',checkError(courseController.getPurchasedCourses))
router.post('/',checkError(courseController.createCourse))
router.post('/purchased',checkError(courseController.cretePurchasedCourse))
router.put('/:id',checkError(courseController.updateCourse))
router.delete('/:id',checkError(courseController.deleteCourse))
router.get('/category/:categoryId',checkError(courseController.getCoursesByCategoryId))

module.exports=router

