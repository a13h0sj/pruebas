const express= require('express');
const app = express();
app.get('*',(req,res)=>{
    res.send({message:'asdasd'})
})
app.listen(3000,()=>{
    console.log('esc');
})