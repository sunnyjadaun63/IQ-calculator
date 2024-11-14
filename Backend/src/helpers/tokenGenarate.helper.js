const jwt=require("jsonwebtoken")
require('dotenv').config()
const genarateToken=async(user)=>{
    try {
        return jwt.sign({id:user.Id,email:user.email},process.env.SECRET_KEY,{expiresIn:'1m'})
        
    } catch (error) {
        console.log('something went wrong!',error)
        
    }
}
const verifyToken=async(token)=>{
    try {
        return jwt.verify(
            token,
            process.env.SECRET_KEY
        )
    } catch (error) {
        console.log('something went wrong!',error) 
        
    }

}
module.exports={genarateToken,verifyToken}