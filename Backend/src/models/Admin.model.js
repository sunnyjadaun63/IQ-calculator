const mongoose=require('mongoose')
const adminSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String
    },
    type:{
        type:String,
        default:'admin'

    }
})

module.exports= new mongoose.model('admin',adminSchema)