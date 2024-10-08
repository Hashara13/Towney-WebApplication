const express = require('express')
const mongoose=require('mongoose')
const router=express.Router()
const CrewGroup=require('../models/crewGroup')

router.post('/create/group/new', (req,res)=>{
    CrewGroup.create(req.body)
    .then((user)=>res.status(201).send(user))
    .catch((err)=>{
        console.log('Error to assigning Groups !',err)
        res.status(500).send(err)
    })
})

router.get('/create/group', async (req,res)=>{
    CrewGroup.create(req.body)
    .then((user)=>res.status(201).send(user))
    .catch((err)=>{
        console.log('Error to assigning Groups !',err)
        res.status(500).send(err)
    })
})