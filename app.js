require("dotenv").config();
const express=require("express");

const Course=require("./mongo.js");
const Joi=require("joi");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const auth=require("./middleware.js");
const fs=require("fs");
console.log(typeof process.env.SECRET);



const app=express();
app.use(express.json());

const schema={email:Joi.string().min(4).email().required(),password:Joi.string().min(4).required()};




app.post("/login", async (req,res)=>{
try{
   const resul=Joi.validate(req.body,schema);
    if(resul.error){
        res.status(404).send(resul.error.details[0].message);
        return;
    }
  
    const result= await Course.findOne({email:req.body.email});
    if(!result)
    {
      res.send("email not found");
    }
   const set=await bcrypt.compare(req.body.password,result.password);
   
   if(!set){
     return res.send("Invalid pasword");
   }
const token = jwt.sign({_id:result.id},"itismykeyblablabla");

result.token=token;

result.save();
res.header("x-auth-token",token).send("valid user");

  }catch(err){ console.log("gagan"+err);}
  
});

app.post("/register",async (req,res)=>{try{
    const resul=Joi.validate(req.body,schema);
    if(resul.error){
        res.status(404).send(resul.error.details[0].message);
        return;
      }
      const user=new Course({email:req.body.email,password:req.body.password});
      user.password=await bcrypt.hash(user.password,10);
     
      const result=await user.save();
    res.send(result);}
    catch(err){
        res.send("gagan"+err);
    }
    
});
 app.put("/api/:id",async (req,res)=>{
try{

  const user1=await Course.findOne({email:req.params.id});
const user=await Course.findByIdAndUpdate(user1.id,{$set:{name:req.body.name}},{new:true});


if(user)
{
  res.send(user);
}else{
  res.status(401).send("User Not Found");
}
}catch(err){
res.send("there is some error");
}


});
app.delete("/api/:id",async (req,res)=>{
try{
  const result1=await Course.findOne({email:req.params.id})
  const result=await Course.findByIdAndDelete(result1.id);
  res.send(result)
}catch(err){
  res.send(err);
}
}
);
app.get("/about",auth,(req,res)=>{
  res.send(req.user);

});
app.get("/api",async (req,res)=>{
  try{
res.send(await Course.find());}
catch(err){
  res.send("gagan"+err);
}
})

app.listen(3001,()=>{console.log("connected at 3001")});


