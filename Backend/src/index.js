const express=require('express')
const cors=require('cors')
const connectDB = require('./database/db')
const HomeRoutes=require('./routes/Home.route')
const DashboardRoutes=require('./routes/Dashboard.route')

const app=express()

connectDB()
app.use(express.json())
app.use(cors({ origin: '*', credentials: true }))

app.use('/api/home',HomeRoutes)
app.use('/api/dashboard',DashboardRoutes)


app.listen(8000,()=>{
    console.log("App running on port 8000")
})