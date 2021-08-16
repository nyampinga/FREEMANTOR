import { data } from "browserslist";
import sessionInfo from "../models/sessionModel";


class SessionController{
//signup

static sessionRequest = async(req,res)=>{
    const session = await sessionInfo.create(req.body);

    if (!session) {
        return res.status(400).json({
            status:400,
            message:"failed to make request!"
        })
        
    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:session
    })
}

static getAllSession = async(req,res)=>{
    const sessions = await sessionInfo.find();

    if (!sessions) {
        return res.status(404).json({
            status:404,
            message:"failed to get all sessions!"
        })
        
    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:sessions
    })
}


static findOneSession = async(req,res)=>{
    const session = await sessionInfo.findById(req.params.id);

    if (!session) {
        return res.status(404).json({
            status:404,
            message:"failed to get one session!"
        })
        
    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:session
    })
}
static DeleteSession = async(req,res)=>{
    const session = await sessionInfo.findByIdAndDelete(req.params.id);

    if (!session) {
        return res.status(404).json({
            status:404,
            message:"failed to delete  session!"
        })
        
    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:session
    })
}

static UpdateSession = async(req,res)=>{  

    const session = await sessionInfo.findByIdAndUpdate(req.params.id, req.body);

    if (!session) {
        return res.status(404).json({
            status:404,
            message:"failed to update  session!"
        })
        
    }
const update = await sessionInfo.findById(req.params.id);
    return res.status(200).json({
        status:200,
        message:"woow!succesfully updated!",
        data:update

    })
}
static declineOneSession = async(req,res)=>{  

    const session = await sessionInfo.findByIdAndUpdate(req.params.id, {status:"decline"});

    if (!session) {
        return res.status(404).json({
            status:404,
            message:"failed to update  session!"
        })
        
    }
const update = await sessionInfo.findById(req.params.id);
    return res.status(200).json({
        status:200,
        message:"woow!succesfully updated!",
        data:update

    })
}

static acceptOneSession = async(req,res)=>{  

    const session = await sessionInfo.findByIdAndUpdate(req.params.id, {status:"approve"});

    if (!session) {
        return res.status(404).json({
            status:404,
            message:"failed to update  session!"
        })
        
    }
const update = await sessionInfo.findById(req.params.id);
    return res.status(200).json({
        status:200,
        message:"woow!succesfully updated!",
        data:update

    })
}

}

export default SessionController;