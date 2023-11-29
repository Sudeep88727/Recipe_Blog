const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("./db/conn");

const path = require("path");

// send index.html (register page) on /registeration
const static_path = path.join(__dirname, "../public");
app.use('/', express.static(static_path));

// import register schema
const Register = require("./models/registerschema");

// to read json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create data and store into data base
app.post("/register", async (req, res) => {
    try {
        const registerproduct = new Register({
            productname: req.body.name,
            price: req.body.price,
            reviews: req.body.reviews,
            productdescription: req.body.description,
            sellerphone: req.body.phone,
            gender: req.body.gender
        })
        const response = await registerproduct.save();
        res.send("product register successfully");
        console.log(response);
    }
    catch (error) {
        res.status(400).send(error);
    }
})
app.get('/allproducts', async (req, res) => {
    const all = await Register.find();
    res.send(all);
})

// host site on port
app.listen(port, () => {
    console.log(`server is running at ${port}`);
})