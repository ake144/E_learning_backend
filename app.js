
require("dotenv").config();
const express = require('express');
const cookie=require('cookie-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

const userRoute=require('./routes/user_route')
const categoryRoute=require('./routes/category_route')
const courseRoute=require('./routes/course_route')
const  ratingRoute=require('./routes/rating_route')
const authRoute=require('./routes/auth_route')
const {checkToken}=require('./utils/check_token')
const {errorResponder}=require('./utils/error_responder')

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())


app.use((req,res,next)=>{
   console.log(req.body,req.params,req.query)
   next()
})
app.use('/auth',authRoute)
// app.use(checkToken)
app.use('/user',userRoute)
app.use('/category',categoryRoute)
app.use('/course',courseRoute)
app.use('/rating',ratingRoute)
app.use(errorResponder)

module.exports = app;
