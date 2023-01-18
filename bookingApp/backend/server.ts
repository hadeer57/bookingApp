import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoute from "./routes/adminRoute"
import hotelsRoute from "./routes/hotelsRoute"
import roomsRoute from "./routes/roomsRoute"
import usersRoute from "./routes/usersRoute"
const cors = require("cors");
var cookieParser = require("cookie-parser");


const app = express();
const port = process.env.PORT || 4000;
require('dotenv').config()

// app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', false)


const mongodb:any = process.env.MONGO;

mongoose.connect(mongodb).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});


app.use ("/admin" , adminRoute);
app.use ("/hotels" , hotelsRoute);
app.use ("/rooms" , roomsRoute);
app.use ("/users" , usersRoute);



app.listen(port, () => {
    return console.log(`Server is listening at port:${port} 🔥`);
  });
