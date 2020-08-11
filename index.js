const express= require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const app = express();
app.get('*',(req,res)=>{
    console.log('asdadqwe');
    res.send({message:'asdasd'})
})
module.exports = app ;