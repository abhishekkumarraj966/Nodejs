import mongoose from "mongoose"

const categorySchma=new mongoose.Schema({

    name:{
        type:String,
        required:true,

    }
},{timestamps:true})

export const Category=mongoose.model("Categorys", categorySchma )