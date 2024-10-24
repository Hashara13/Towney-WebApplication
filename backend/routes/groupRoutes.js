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
    const {groupName,cost,description,members,location}=req.query;
    const query={}
    const crewGroups=await CrewGroup.find(query).populate('groupName').exec();
    res.status(201).json(crewGroups)
   }catch(err){
    console.error('Error in Fetching Group Data',err)
    res.status(500).json({error:'An error occurred while fetching data'})
   } 
})

router.get('/create/group/:id', async (req,res)=>{
    try{
     const groupId=req.params.id;
     const crew_Group=await CrewGroup.findById(groupId)
     res.status(201).json(crew_Group)
    }catch(err){
     console.error('Error in Fetching Group Data',err)
     res.status(500).json({error:'An error occurred while fetching data'})
    } 
 })

 router.put('/create/group/edit/:id', async (req,res)=>{
    try{
     const groupId=req.params.id;
     const UpdateCrew_Group=await CrewGroup.findByIdAndUpdate(groupId,req.body,{new:true})
     if (!UpdateCrew_Group) {
        return res.status(404).json({ error: 'Group not found' });
    }
     res.status(201).json(UpdateCrew_Group)
    }catch(err){
     console.error('Error in Fetching Group Data',err)
     res.status(500).json({error:'An error occurred while fetching data'})
    } 
 })

 router.put('/create/group/delete/:id', async (req,res)=>{
    try{
     const groupId=req.params.id;
     const UpdateCrew_Group=await CrewGroup.findByIdAndDelete(groupId,req.body,{new:true})
     res.status(201).json(UpdateCrew_Group)
    }catch(err){
     console.error('Error in Fetching Group Data',err)
     res.status(500).json({error:'An error occurred while fetching data'})
    } 
 })
 module.exports = router;
