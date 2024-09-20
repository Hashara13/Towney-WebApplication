const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config();
const Production_userModel=require('./models/production_user')


const app=express()
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());


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

  // app.get('/network', (req, res) => {
  //   Production_userModel.find({})
  //     .then((user) => res.status(201).send(user)) 
  //     .catch((err) => {
  //       console.error('Error creating user:', err);
  //       res.status(500).send(err); 
  //     });
  // });

  app.get('/network', async (req, res) => {
    try {
      const { name, state } = req.query;

      const query = {};
  
      if (name) query.name = { $regex: name, $options: 'i' };
      if (state) query.state = state;
  
      const crewMembers = await Production_userModel.find(query).populate('name').exec();
      res.status(200).json(crewMembers);
    } catch (err) {
      console.error('Error fetching crew members:', err);
      res.status(500).json({ error: 'An error occurred while fetching crew members.' });
    }
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
  try {
    const crewId = req.params.id;
    const updatedCrew = await Production_userModel.findByIdAndUpdate(crewId, req.body, { new: true });
    res.status(200).send({ status: 'update success', updatedCrew });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to update crew member' });
  }
});

app.delete('/network/delete/:id', async (req, res) => {
  try {
    const crewId = req.params.id;
    await Production_userModel.findByIdAndDelete(crewId);
    res.status(200).send({ status: 'delete success' });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to delete crew member' });
  }
});




