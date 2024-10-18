const express=require('express')
const mongoose=require('mongoose')
const multer=require('multer')
const path=require('path')
const cors=require('cors')
const router=express.Router()
const Profile = require('../models/myProfile');

const storage=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, 'uploads/')
    },
    filename:(req, file, cb)=>{
        cb(null, Dat.now()+path.extname(file.originalname))
    }
})

const upload=multer({storage:storage})

app.post('/create/upload', upload.single('photo'), async(req, res)=>{
    
})


