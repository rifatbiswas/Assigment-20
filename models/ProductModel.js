const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const productSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            trim:true,
            required:true,
            maxlenght:160
        },        
        description:{
            type:{},
            required:true
        },
        price:{
            type:Number,
            trim:true,
            required:true
        },
        category:{
            type:ObjectId,
            ref:"Category",
            required:true
        },
        stock:{ 
            type: Number,
            required: true,
            min: 0
        },
        imageURL:{
            type:String,
        }               
    },
    {timestamps:true, versionKey:false},
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;