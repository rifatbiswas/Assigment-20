const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        firstName:{
            type:String,
            trim:true,
            required:true,
        },
        lastName:{
            type:String,
            trim:true,
            required:true,
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            reqquired:true,
            min:6,
            max:64,

        },
        address:{
           type:String,
           trim:true, 
        },
        phoneNumber:{
            type:String,            
        },

    },
    {timestamps:true,versionKey:false},
);

const User = mongoose.model('User', userSchema);

module.exports = User;