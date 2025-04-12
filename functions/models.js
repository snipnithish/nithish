import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    requried:true,
},
  email:{
    type:String,
    requried:true,
    unique:true,
},
  password:{
    type:String,
    requried:true,
},
});

export const UserModel = mongoose.model("User", UserSchema, "users");
