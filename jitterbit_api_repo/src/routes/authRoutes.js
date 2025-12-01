const express=require("express");
const jwt=require("jsonwebtoken");
const {SECRET}=require("../middleware/auth");
const router=express.Router();
router.post("/login",(req,res)=>{
  const{username,password}=req.body;
  if(username==="admin"&&password==="senha123"){
    const token=jwt.sign({username},SECRET,{expiresIn:"1h"});
    return res.json({token});
  }
  return res.status(401).json({error:"Credenciais inválidas"});
});
module.exports=router;