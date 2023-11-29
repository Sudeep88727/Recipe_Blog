const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/registeration").then(() => {
    console.log("mongodb connected")
}).catch((e) => {
    console.log(e);
})