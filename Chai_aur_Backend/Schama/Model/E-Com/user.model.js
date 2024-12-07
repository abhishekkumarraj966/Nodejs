import mongoose from "mongoose"

const UserSchema= new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
      email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const User=mongoose.model("User", UserSchema)