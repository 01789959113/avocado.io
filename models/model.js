const mongoose = require('mongoose');


const kittySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    subject:{
        type: String, 
        trim: true
    },
    address:{
        type: String, 
        trim: true
    },
    jobPosition:{
        type: String,
    },
    cv:{
        type:String,
    },
    location :{
        type: String,
    },
    size: {
        type: String,
    },
    bedRoom:{
        type: Number,
    },
    bathRoom:{
        type: Number,
    }
});

const User = mongoose.model('User', kittySchema);

module.exports = User;

