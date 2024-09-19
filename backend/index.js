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

  app.get('/network', (req, res) => {
    Production_userModel.find({})
      .then((user) => res.status(201).send(user)) 
      .catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).send(err); 
      });
  });

  app.get('/network/get/:id', async (req, res) => {
   try{
    const crewId=req.params.id;
    const Crew=await Production_userModel.findById(crewId);
     res.status(201).send({status:'fetch success', Crew})
   } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to fetch lesson' });
  }
});

app.put('/network/update/:id', async (req, res) => {
  try{
   const crewId=req.params.id;
   const Crew=await Production_userModel.findByIdAndUpdate(crewId);
    res.status(201).send({status:'fetch success', Crew})
  } catch (err) {
   console.log(err);
   res.status(500).send({ error: 'Failed to fetch lesson' });
 }
});

app.delete('/network/update/:id', async (req, res) => {
  try{
   const crewId=req.params.id;
   const Crew=await Production_userModel.findByIdAndUpdate(crewId);
    res.status(201).send({status:'fetch success', Crew})
  } catch (err) {
   console.log(err);
   res.status(500).send({ error: 'Failed to fetch lesson' });
 }
});




