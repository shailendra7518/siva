// const mongoose = require('mongoose')

// const URL = "mongodb+srv://shiva:shiva_123@cluster0.ptpbc.mongodb.net/Marriott?retryWrites=true&w=majority"

// const connect = mongoose.connect(URL , {
//             useUnifiedTopology : true, 
//             useNewUrlParser : true , 
// },err => {
//     if(err){
//         console.log("error in db connection", err)
//     }else {
//         console.log("Database connected")
//     }
// })

const mongoose =require('mongoose');
const connect =()=>{
    return mongoose.connect("mongodb+srv://shiva:shiva_123@cluster0.ptpbc.mongodb.net/Marriott?retryWrites=true&w=majority")
    // return mongoose.connect("mongodb+srv://Nikhil874:Nikil874@cluster0.3l0um.mongodb.net/marriottbonvoy")

}

module.exports=connect;
