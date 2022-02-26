const express = require('express');
const connect= require("./config/db");
require("dotenv").config();
const mongoose  = require("mongoose")
const app = express();
const PORT = 9682

require('../src/config/db');

const userController = require('../src/controller/user.controller');

app.use(express.json());
app.use("/users", userController);

app.listen(process.env.PORT || 5000, async() => {
    try{
await connect();
console.log("Server is running at port: ", PORT);
    }
    catch(e){
console.log(e.message);
    }
    
});
// const start=require("./server");
// start();
// const express=require('express');
// const connect=require("./config/db");
// require("dotenv").config();
// const userController = require('../src/controller/user.controller');


// const app=express();
// app.use(express.json());

// app.use("/users", userController);

// app.listen(process.env.PORT || 5000, async()=>{
    
//     try{
//         await connect();
//         console.log('Listing on port 9682');
//     }
//     catch(err){
//        console.log(err.message);
//     }
// });
