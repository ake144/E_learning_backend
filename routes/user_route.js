const express = require('express');
const router = express.Router();
const userController=require('../controller/users_controller')
const  {checkError}=require('../utils/error_checker')


// router.post('/register',checkError,userController.createUser)
// router.get('/user/:id',checkError,userController.getUserById)
// router.get('/user/:phone_number',checkError,userController.getUserByPhoneNumber)
// router.get('/users',checkError,userController.getAllUsers)
router.put('/user/:id',checkError(userController.updateUser))
router.delete('/user/:id',checkError(userController.deleteUser))




module.exports=router