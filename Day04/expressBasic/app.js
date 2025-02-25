const express = require('express');
// console.log(express);
const app = express();

// middleware
// app.use('/home',(req,res)=>{
    // console.log(req);
//     res.send('<h1>response from server</h1>');
//     console.log(res);
    
    
// })

//get()
app.get('/thakgaye',(req,res)=>{
    res.send('<h1>response from my route -> thakana mana hai </h1>');
})
app.get('/hii',(req,res)=>{
    res.send('<h2> response from route 2 -> Lekin hum bahut thak gaye hai </h2>');
})

app.get('/hllo',(req,res)=>{
    res.send('<h1> response from route 3 -> Hamako ghar jana hai</h1>');
})

app.get('/he',(req,res)=>{
    res.send(' response from route 3 -> Hamako ghar jana hai');
})

app.listen(8080,()=>{
    console.log('server is running at port 8080');
    
})
