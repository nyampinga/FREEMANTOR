import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
firstName:{
    type:String,
    required:[true,"firstname is required"]

},
lastName:String,
email:{
    type:String,
    required:true,
    unique:true

},
password:{
    type:String,
    default:"1234567"
},
phone:{
    type:String
    
},
gender:{
    type:String,
    enum:["Male","Female"]
},
age:Number,
role:{
    type:String,
    enum:["admin","mentor","user"],
    default:"user"
},
status:{
    type:String,
    enum:["active","inactive"],
    default:"active"
}
});


 const userInfo = mongoose.model("User", userSchema);
 export default userInfo;
