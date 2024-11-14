const getHome=async(req,res)=>{
    try {
        return res.status(200).json({message:"Api fetched succesfully"})
        
    } catch (error) {
        return res.status(500).json({message:"something went wrong",error})
        
    }
}

module.exports={getHome}