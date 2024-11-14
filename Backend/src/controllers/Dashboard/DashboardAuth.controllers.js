const { encryptPassword, decryptPassword } = require('../../helpers/Password.helper');
const { genarateToken } = require('../../helpers/tokenGenarate.helper');
const Admin = require('../../models/Admin.model');

const createAdmin=async(req,res)=>{

    try {
        const { name, email, password } = req.body;
        
        if(!email || !password){
            return res.status(400).status({message:'Please provide email and password'})
        }
        const isExist=await Admin.findOne({email,type:'admin'})
        
        if(isExist){
            return res.status(400).json({message:'Admin already exist'})
        }
        const hashedPassword=await encryptPassword(password)
        const admin = new Admin({ name, email, password:hashedPassword });
        await admin.save();
        return res.status(200).json({message:"Admin created successfully", admin});
        
    } catch (error) {
        return res.status(500).json({message:"Failed to create admin",error})
        
    }

}
const dashboardLogin=async(req,res)=>{

    try {
        const {email,password}=req.body
        if(!email || !password){
            return res.status(404).json({message:"Please provide email and password"})
        }
       
        const user= await Admin.findOne({email,type:'admin'})
       
        if(!user){
            return res.status(404).json({message:"admin not found"})
        }
        const hashedPassword=await decryptPassword(password,user.password)
        
        if(!hashedPassword){
            return  res.status(409).json({message:"Password did not matched"})
            
        }

        let copyUser=user
        delete copyUser._doc.password
        const token=await genarateToken(user)
        console.log(token)
        if(!token){
            return  res.status(409).json({message:"Could not genarated token"})
        }
       
        return res.status(200).json({message:"Admin data found",data:copyUser._doc,token})
        
    } catch (error) {
        return res.status(500).json({message:"No Admin data found",error})
        
    }

}

module.exports={dashboardLogin,createAdmin}