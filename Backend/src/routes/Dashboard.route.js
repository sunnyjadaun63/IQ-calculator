const router=require('express').Router()
const { dashboardLogin ,createAdmin} = require('../controllers/Dashboard/DashboardAuth.controllers')



router.post('/signUp',createAdmin)
router.post('/login',dashboardLogin)


module.exports=router