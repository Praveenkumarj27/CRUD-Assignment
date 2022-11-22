const mongoose = require('mongoose');
const validator = require('validator');

var userSchema = new mongoose.Schema({
    firstname:{type:'string',required:true},
    lastname:{type:'string',required:true},
    middlename:{type:'string'},
    email:{
        type:'string',
        required:true,
        unique:true,
        lowercase:true,
        validate:(value)=>{
            return validator.isEmail(value)
        }
    },
    dob:{type:'string'},
    mobile:{type:'string',unique:true},
    password:{type:'string'},
    occupation:{type:'string'},
    company:{type:'string'},

})


const UserDetails = mongoose.model('users',userSchema);
module.exports={UserDetails}