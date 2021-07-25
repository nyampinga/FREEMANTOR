import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
firstName:String,
lastName:String,
email:String,
password:String,
phone:String,
gender:String,
age:Number
});
 const userInfo = mongoose.model("User", userSchema);
 export default userInfo;
