const mongoose=require('mongoose')

const chatSchema=new mongoose.Schema({
title:{type:String, required:true},
description:{type:String, required:true},
time:{type:String, required:true},
members: { type: mongoose.Schema.Types.ObjectId, ref: 'Production_user' }
})
const ChatRoom=mongoose.model('chatRoom',chatSchema)
module.exports=ChatRoom; 