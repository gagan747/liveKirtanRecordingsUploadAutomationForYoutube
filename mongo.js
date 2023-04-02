const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/Demo").then(()=>console.log("connected")).catch(()=>{console.error("there is error")});

const schema=new mongoose.Schema({
  
    password:{type:String,minlength:10,required:true},
   email:{type:String,minlength:10,required:true,unique:true},token:String,name:String

    
    
    
    

});

const Course= mongoose.model("Course",schema);

 





module.exports=Course;
