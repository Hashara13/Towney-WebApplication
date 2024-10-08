const express = require('express')
const mongoose=require('mongoose')
const router=express.Router()
const CrewGroup=require('../models/crewGroup')

router.post('/create/group/new', (req,res)=>{
    CrewGroup.create(req.body)
})