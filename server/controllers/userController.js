import { data } from "browserslist";
import userInfo from "../models/userModel";
import TokenAuth from "../helpers/TokenAuth";

class UserController{

    static signinUser = async (req, res) =>{
        const {email, password} = req.body;

        const user = await userInfo.findOne({email: email, password: password});

        if (!user) {
            
            return res.status(400).json({
                status:400,
                message:"user not exist"
            })
        }

        const token = TokenAuth.tokenGenerator({
            id: user._id,
            email: user.email,
            status: user.status,
            role: user.role
        })
        return res.status(200).json({
            status:200,
            message:"user loged in successfull !",
            token:token,
            data:user
        })
    }
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

static getAllMentors = async(req,res)=>{
    const users = await userInfo.find({role: "mentor"});

    if (!users) {
        return res.status(404).json({
            status:404,
            message:"failed to get all mentor!"
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
static UpdateOneUserRole = async(req,res)=>{  
const data = await userInfo.findById(req.params.id);
let role;

if (data.role =="user") {
    role = "mentor";
} else {
    role = "user";
}



    const user = await userInfo.findByIdAndUpdate(req.params.id, {role: role});

    if (!user) {
        return res.status(404).json({
            status:404,
            message:"failed to update  user!"
        })
        
    }
const update = await userInfo.findById(req.params.id);
    return res.status(200).json({
        status:200,
        message:"woow!succesfully updated role!",
        data:update

    })
}


}

export default UserController;