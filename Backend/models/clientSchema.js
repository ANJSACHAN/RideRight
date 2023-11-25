const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
const clientSchema = new mongoose.Schema({
     name :{
          type : String,
          required : true,
          trim : true

     },
     email :{
          type : String,
          required : true
     },
     phone :{
          type : Number, 
         
     },
     password :{
          type : String,
          required : true,
          min : 8
     },
     car:[{
          car :{ 
               type:mongoose.Schema.Types.ObjectId, 
               ref:'carSchema' 
           },
           time :{
               type: Number
           }
       }],
       tokens:[
          {
               token:{
                    type : String,
                    required:true
               }
          }

       ]

});

// hashing
// clientSchema.pre('save', async function(next){
//      if(this.isModified('password')){
//           this.password = bcrypt.hash(this.password,12);
//      }
//      next();
// })

//token

// clientSchema.methods.generateAuthToken = async function(){
//      try{
//           let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
//           this.tokens = this.tokens.concat({token:token});
//          await this.save();
//           return token
//      }
//      catch(err){
//           console.log(err);
//      }
// }


const Client = mongoose.model('Client',clientSchema);

module.exports = Client;




