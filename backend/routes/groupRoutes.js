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
   try{
    const {groupName,cost}=req.query;
    const query={}
    const crewGroups=await CrewGroup.find(query).populate('groupName').exec();
    res.status(201).json(crewGroups)
   }catch(err){
    console.error('Error in Fetching Group Data',err)
    res.status(500).json({error:'An error occurred while fetching data'})
   } 
})