const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config();
const production_userModel=require('./models/production_user')


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)



app.listen(3001,()=>{
    console.log("Server is started !")
})

app.post('/create/new',(req,res)=>{
    production_userModel.create(
        req.body
    ).then(
        users=>res.send(production_user)
    ).catch(
        production_user=>res.send(err)
    )
})