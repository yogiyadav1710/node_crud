const express=require('express')
var app=express()

app.get('/',(req,res)=>{
    // res.end("this is homepage,darling...")
    res.send('this is homepage api..')
});

app.get('/usernames',(req,res)=>{

    var usernames=['Aditya','Sahil','Sagar','Saurabh']
    res.send(usernames)
})

app.listen(3000,function(){
    console.log('server started on port 3000..')
}) 