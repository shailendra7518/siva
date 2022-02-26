const express = require("express");
const mongoose = require("mongoose")
const app = express();

const vacationPlaceSchema = new mongoose.Schema({
    
    vacation_price:{type:Number, require:true},
    vacation_feature:{type:String, require:true},
    vacation_place:{type:String, require:true},
    vacation_img:{type:String, require:true}
},{
    timestamps:true,
    versionKey:false
});

module.exports = mongoose.model("vacation", vacationPlaceSchema);

