const jwt = require('jsonwebtoken');

const ValidToken = async (req, res, next) => {
  
  let authorization = await req.get("authorization")?.toString();
  let token = '';
  if(authorization && authorization?.toLowerCase().startsWith("bearer")){
    token = authorization.substring(7);
  }
  let decodedToken =  "";
  if(authorization === undefined || !authorization){
    return res.status(400).send({message: "Bearer Token es requerido"});
  }
  try {
    decodedToken = await jwt.verify(token, process.env.TOKENKEYJWT);
    //console.log(decodedToken);
  } catch (error) {
    console.error(error);
    return res.status(400).send({message: "Ha ocurrido un error mientras se realizaba la petición"});
  }
  next();
} 

module.exports = ValidToken;