const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/user.model");

const router = express.Router();
router.post(
    "/vacation",
    async (req, res) => {
        try {
         
          const user = await User.create(req.body);
    
          console.log("new user added", user);
          return res.json({USER: user, message: "new Product addded"});
          
        } catch (err) {
          return res.status(500).send({ message: err.message });
        }
      }

);

router.get("/vacation", async(req,res)=>{
  try{
const user = await User.find().lean().exec();
console.log("new user added", user);
return res.status(201).send(user);
  }catch(err){
    return res.status(500).send({ message: err.message });
  }
})


module.exports = router;