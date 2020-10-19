const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'username is required'],
       
    },
    email:{
        type:String,
        required: true,
        validate:[validator.isEmail, 'PLEASE PROVIDE AN EMAIL'],
        unique:true
    },
    password:{
        type:Number,
        required:true
    }
})
const User = mongoose.model('User', userSchema);

module.exports = User;
