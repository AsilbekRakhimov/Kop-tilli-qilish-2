import mongoose from "mongoose";

const categorySchema  = new mongoose.Schema({
    name:{
        type:Object
    },
    description:{
        type:Object
    },
    products:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"products"
    }]
},{
    _id:true,
    timestamps:true, 
    collection:"categories"
});

export const category = mongoose.model("categories", categorySchema)