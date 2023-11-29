const mongoose = require("mongoose");
const registerschema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        unique: true
    },
    reviews: {
        type: Number,
        required: true
    },
    productdescription: {
        type: String,
        required: true,
    },
    sellerphone: {
        type: Number,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
    }
})

const Register = new mongoose.model("Register", registerschema);
module.exports = Register;