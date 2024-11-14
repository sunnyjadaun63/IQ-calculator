const {getHome} = require('../controllers/Home/Home.controllers')

const router=require('express').Router()


router.get('/getHome',getHome)

module.exports=router