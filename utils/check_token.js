const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('./custom_error');
const {getToken}=require("next-auth/jwt")
async function checkToken(req,res,next) {
    let token;
    token= await getToken({req,secret:process.env.JWT_SECRET})
    console.log(token,'toto')
 
    if (!token) {
        throw new AuthenticationError({ status: 401, message: 'Token not found' });
    }
    next()

}

//     try {
//         console.log(req.cookies['next-auth.session-token'],'*****************************'
//             , process.env.JWT_SECRET)
//         let tt=await jwt.decode(req.cookies['next-auth.session-token'], process.env.JWT_SECRET);
//         console.log(tt,'tt')
//         await jwt.verify(req.cookies['next-auth.session-token'], process.env.JWT_SECRET,{algorithms:['HS256']});
//         next();
//     } catch (error) {
//         throw new AuthenticationError({ status: 401, message: 'Invalid Token' });
//     }
// }

module.exports = {
    checkToken
}
