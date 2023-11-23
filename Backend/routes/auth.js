const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');

router.get('/',(req,res)=>{
     res.send("Hello from server router");
})

router.post('/register', async (req,res)=>{
    const {name , email ,phone, password, car } = req.body;

    if(!name || !email || !phone || !password || !car){
     return res.status(422).json({error : "Plz filled the field"});
    }

    try{
    const clientExist = await Client.findOne({email : email});


    if(clientExist){
     return res.status(422).json({error : "Email already Exist"});
    }
    

    const client = new Client ({name, email, phone , password, car});




     await client.save();

     res.status(201).json({message:" user registered successfuly"});

    }
    catch(err) {
     console.log(err);
    }
   

});


router.post('./login', async( req,res)=>{
     // console.log(req.body);

     try{
          let token;
          const{email,password} = req.body;

          if(!email || !password){
               return res.status(400).json({error : "plz filled the data"})
          }
          
          const clientLogin = await Client.findOne({email:email});

          if(clientLogin){
               const isMatch = await bcrypt.compare(password, clientlogin.password);

               token = clientLogin.generateAuthToken();
               console.log(token);

               res.cookie("jwtoken",token, {
               expires:new Date(Date.now()+25892000000),
               httpOnly:true})

               if(!isMatch){
                   res.status(400).json({error : "Invalid Password"});
               }
              else{
                   res.json({message :"Client signin successfully"});
              }
          }
          else{
               res.status(400).json({error : "Invalid Password"});
          }

      }
          catch(err){
               console.log(err);
          }
     });


module.exports = router;