const express= require('express');
const app = express();
app.get('*',(req,res)=>{
    console.log('asdadqwe');
    res.send({message:'asdasd'})
})
module.exports = app ;