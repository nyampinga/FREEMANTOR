import { data } from "browserslist";
import userInfo from "../models/userModel";


class UserController{
//signup

static signupUser = async(req,res)=>{
    const user = await userInfo.create(req.body);

    if (!user) {
        return res.status(400).json({
            status:400,
            message:"failed to register!"
        })
        
    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:user
    })
}

static getAllUsers = async(req,res)=>{
    const users = await userInfo.find();

    if (!users) {
        return res.status(404).json({
            status:404,
            message:"failed to get all users!"
        })
        
    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:users
    })
}


}

export default UserController;