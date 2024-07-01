const express = require('express');
const router = express.Router();
const ratingController=require('../controller/payment_controller')
const  {checkError}=require('../utils/error_checker')

router.post('/',checkError(ratingController.chappaPay))

module.exports=router
