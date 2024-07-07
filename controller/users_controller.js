const db = require("../config/db");

const userModel=require('../model/users_model')






// Get all users

// Update a user
async function updateUser(req,res) {

     const {Fname,Lname,phone_number,email,password}=req.body
     const update=await userModel.updateUser(req.params.id,Fname,Lname,phone_number,email,password)
     res.json(update)
}

// Delete a user
async function deleteUser(req,res) {

    const deleteuser=await userModel.deleteUser(req.params.id)
    res.json(deleteuser)
       
    
}

module.exports = {
   
    updateUser,
    deleteUser,
};
