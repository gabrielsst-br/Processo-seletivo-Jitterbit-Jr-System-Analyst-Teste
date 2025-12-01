const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "segredo-muito-seguro";
function authMiddleware(req,res,next){
  const h=req.headers["authorization"];
  if(!h) return res.status(401).json({error:"Token não fornecido"});
  const [scheme,token]=h.split(" ");
  if(scheme!=="Bearer"||!token) return res.status(401).json({error:"Formato inválido"});
  try{ req.user=jwt.verify(token,SECRET); next(); }
  catch(e){ return res.status(401).json({error:"Token inválido ou expirado"});}
}
module.exports={authMiddleware,SECRET};