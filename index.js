const express= require('express');
const connectDB = require('./config/db')
const authentication = require("./controller/auth")
const cars = require("./controller/cars")
const app = express();
const cors= require('cors')
const dotenv=require('dotenv')
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/uploads', express.static('uploads'));

app.use("/auth",authentication)
app.use('/',cars)

app.get('/',(req,res)=>{
    res.send({message : 'welcome to buycars.com'}); 
})

const port = process.env.PORT || 8080;
// app.listen(port,async()=>{
//     await connections;
//     console.log('listening on port 8080');
// })
app.listen(port, async () => {
  try{
      await connectDB()
      console.log("connected to DB successfully")
  }
  catch(err){
      console.log("error while connecting to DB")
      console.log(err)
  }
  console.log("Listening on port 8000")
})