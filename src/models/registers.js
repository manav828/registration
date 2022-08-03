const mongoose = require("mongoose");

const usersDetails = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    pnum: {
        type: String,
        required:true,
        unique:true
    },
    pass : {
        type: String,
        required:true,
        
    },

})

const Register = new mongoose.model("Register",usersDetails);

module.exports = Register;