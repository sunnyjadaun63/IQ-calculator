const bcrypt=require('bcrypt')
const encryptPassword=async(password)=>{
    try {
        if(!password){
            return ""
        }

        const saltRounds=10
        const salt=await bcrypt.genSalt(saltRounds)
        const hash=await bcrypt.hash(password,salt)
        return hash
        
    } catch (error) {
        console.log("something went wrong!",error)
        
    }
}
const decryptPassword=async(password,hashedPassword)=>{
   
    try {
        if(!password || !hashedPassword){
            return " "
        }
        const hash=await bcrypt.compare(password,hashedPassword)
        return hash
        
    } catch (error) {
        
    }
}

module.exports={encryptPassword,decryptPassword}