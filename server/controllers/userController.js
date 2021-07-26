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


static findOneUser = async(req,res)=>{
    const user = await userInfo.findById(req.params.id);

    if (!user) {
        return res.status(404).json({
            status:404,
            message:"failed to get one users!"
        })
        
    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:user
    })
}
static DeleteUser = async(req,res)=>{
    const user = await userInfo.findByIdAndDelete(req.params.id);

    if (!user) {
        return res.status(404).json({
            status:404,
            message:"failed to delete  user!"
        })
        
    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:user
    })
}

static UpdateUser = async(req,res)=>{  

    const user = await userInfo.findByIdAndUpdate(req.params.id, req.body);

    if (!user) {
        return res.status(404).json({
            status:404,
            message:"failed to update  user!"
        })
        
    }
const update = await userInfo.findById(req.params.id);
    return res.status(200).json({
        status:200,
        message:"woow!succesfully updated!",
        data:update

    })
}

}

export default UserController;