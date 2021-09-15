import TokenAuth from "../helpers/TokenAuth";



const verifyToken = async(req,res,next) =>{
const token = req.header("x-auth-token");
if (!token) {

    return status(404).json({
        status:404,
        message:"no token provided"
    })
    
}
try {
    const user =TokenAuth.getDataFromToken(token);
    console.log(req.user);
    req.user = user;
    return next();
} catch (err) {
    console.log("<<<<><><><><",err);
    
}

}

export default verifyToken;