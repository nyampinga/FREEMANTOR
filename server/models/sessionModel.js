import mongoose from "mongoose";


const SessionSchema=new mongoose.Schema({
title:String,
description:String,
user:String,
mentor:String,
timeToStart:{ 
    type: String,
    
},
timeToEnd:{ 
    type: String,
    
},
status:{
    type: String,
    enum: ["active","inactive"],
    default: "active"
},
});
 const sessionInfo = mongoose.model("session", SessionSchema);
 export default sessionInfo;
