
import userInfo from "../models/userModel";
import TokenAuth from "../helpers/TokenAuth";
import bcrypt from "bcrypt";

class UserController{

    static signinUser = async (req, res) =>{
        const {email, password} = req.body;

        const user = await userInfo.findOne({email: email});

        if (!user) {
            
            return res.status(400).json({
                status:400,
                message:"user not exist"
            })
        }

        if(bcrypt.compareSync(password,user.password)){

            const token = TokenAuth.tokenGenerator({
                id: user._id,
                email: user.email,
                status: user.status,
                role: user.role
            })
            return res.status(200).json({
                status: 200,
                message: "Success login",
                token:token,
                data: user
            })
        }

        return res.status(404).json({
            status: 404,
            message: "Password is incorrect, Please try again.."

        })

    }
//signup

static signupUser = async(req,res)=>{

    const saltRound =10;
        console.log("yup")
        const hashPassword = bcrypt.hashSync(req.body.password,saltRound);
        console.log(hashPassword)
        req.body.password= hashPassword;
    const user = await userInfo.create(req.body);
console.log(user);
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
static findOneMentor = async(req,res)=>{
    const user = await userInfo.findById(req.params.id,{role: "mentor"});

    if (!user) {
        return res.status(404).json({
            status:404,
            message:"failed to get one mentor!"
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
