const { verifyToken } = require("../helpers/tokenGenarate.helper");
const AdminModel = require("../models/Admin.model");

const authenticateAdmin=async(req,res)=>{
    try {
        const authHeader=req.headers.authorization
        if(!authHeader){
            return res.status(409).json({message:"Please provider auth headers correctly"})
        }
        let token;
        if(authHeader.startsWith(`bearer `)){
            token=authHeader.split(" ")[1]
        }
        else{
            token=authHeader
        }
        if(!token){
            return res.status(409).json({message:"Token not provided properly"})
          } 
       const decode=await verifyToken(token)
       if(decode && decode.id){
        const admin=await AdminModel.findOne({_id:decode.id}).select({password:0})
        req.admin=admin
        return next()
       }
    } catch (error) {
        return res.status(500).json({message:"Could not verify token something went wrong",error})
        
    }
}