const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required : true,
    },
    lastName: {
        type: String ,
        required :true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    university: {
        type: String,
        required: true
    },
    stream: {
        type: String,
        required: true
    },
    passingYear: {
        type: Number,
        required: true
    },
    country: {
        type:String,
        required: true
    },
    githubId: {
        type: String,
        required: true
    },
    linkedinId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User',userSchema);