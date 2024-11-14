const mongoose=require('mongoose')
require("dotenv").config()

const options={
    dbName:"quizApp"
}

const connectDB=async()=>{
    try {
        
      await  mongoose.connect(process.env.MONGO_URI,options)
      console.log('DB connected successfully')

    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
        
    }
}

module.exports=connectDB