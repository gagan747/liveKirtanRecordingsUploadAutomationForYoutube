const jwt =require("jsonwebtoken");
function auth(req,res,next){
    try{
        const token=req.header("x-auth-token");
        if(!token){
          res.send("No token provided");
      
        }
       const obj= jwt.verify(token,"itismykeyblablabla");//throws error if not verified
       req.user=obj;
       next();
       
      
      
      }catch(err){
        res.send(err);
       }
      

}
module.exports=auth;