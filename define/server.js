const exp=require('express')
const app=exp();
const fs=require('fs');
const path=require('path')
const port=3000;

app.get("/",(req,res)=>{
    res.send('get request to the welcome')
})

app.get("/about",(req,res)=>{
    res.sendFile('index.html',{root:__dirname})
})

app.listen(port,()=>{
    console.log(`Example app is running ${port}`);
})