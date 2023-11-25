const dotenv = require("dotenv");
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Client = require('./models/clientSchema');

dotenv.config()


mongoose.connect('mongodb://127.0.0.1:27017/RideRight')
.then(()=>{
     console.log("DB Connected");
})
.catch((err)=>{
     console.log(err);
})


app.use(express.json());

app.use(cors({ credentials: true }));
app.use(require('./routes/auth'));



//middleware

const middleware = (req,res,next) =>{
     console.log(`hello my middleware`);
     next();
     // res.send("kuch bhi");
     
}


app.get('/',(req,res)=>{
     res.send("hello");
})

app.get('/about',middleware, (req,res)=>{
     res.send("hello about");
})

app.get('/contact',(req,res)=>{
     res.send("hello");
})

app.get('/Signin',(req,res)=>{
     res.send("hello");
})

app.get('/Signup',(req,res)=>{
     res.send("hello");
})

app.listen(8000, ()=>{
     console.log("server is running at port no. 8000");
})