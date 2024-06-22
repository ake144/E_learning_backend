const express = require('express');
const router = express.Router();
const courseController=require('../auth/login')
const  {checkError}=require('../utils/error_checker')

router.post('/login',checkError(courseController.login))
router.post('/register',checkError(courseController.register))

module.exports=router