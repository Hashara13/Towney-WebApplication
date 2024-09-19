const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config();
const Production_userModel=require('./models/production_user')


const app=express()
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));



app.listen(5000,()=>{
    console.log("Server is started !")
})

app.post('/create/new', (req, res) => {
    Production_userModel.create(req.body)
      .then((user) => res.status(201).send(user)) 
      .catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).send(err); 
      });
  });

  app.get('/create', (req, res) => {
    Production_userModel.find({})
      .then((user) => res.status(201).send(user)) 
      .catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).send(err); 
      });
  });