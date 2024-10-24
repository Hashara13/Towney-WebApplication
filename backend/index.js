const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const productionUserRoutes = require("./routes/productionUserRoutes");
const ratesRoutes = require("./routes/ratesRouter");
const groupRoutes = require("./routes/groupRoutes");
const profileRoutes=require("./routes/profileRoute")
const scriptRoute=require("./routes/scriptsRoutes")

app.use("/", productionUserRoutes);
app.use("/", ratesRoutes);
app.use("/", groupRoutes);
app.use("/", profileRoutes);
app.use("/", scriptRoute);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
