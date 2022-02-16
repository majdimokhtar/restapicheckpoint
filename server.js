const express =require('express');
const app = express();
const connectDB= require ('./config/connectDb');
const router = express.Router()
const user= require ('./models/users')
app.use(express.json());
connectDB()
require('dotenv').config();
app.use("/user",require('./Routes/users'))




//connect PORT 5000


app.listen(process.env.PORT,(err)=>{
    err?console.log('err'):console.log("server is runing"+process.env.PORT)
});