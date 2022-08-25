const express=require('express')
var app=express()

// Initializing the body parser
// body parser is use to to take input from the client

const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 
app.get('/',(req,res)=>{
    // res.end("this is homepage,darling...")
    res.send('this is homepage api..')
});

app.get('/usernames',(req,res)=>{

    var usernames=['Aditya','Sahil','Sagar','Saurabh']
    res.send(usernames)
});

app.post('/login',(req,res)=>{
    var username=req.body.username
    var password=req.body.password

    if(username=='javascript' && password=="nodejs")
    {
        res.send('login successfull');
    }
    else{
        res.send('Login failed..')
    }
});

app.listen(3000,function(){
    console.log('server started on port 3000..')
}) 