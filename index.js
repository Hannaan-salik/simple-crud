const express = require("express")
const mongoose = require('mongoose');
const Product = require("./models/product.js");

const productRoute = require("./routes/product.route.js");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//route
app.use("/api/products", productRoute);

app.get('/', function (req, res) {
    res.send('Hello from node')
});

mongoose.connect("mongodb+srv://hannaan:GJXpA2PcjBuKnC4x@backend.xiv3ixz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
.then( ()=>{
    console.log("connected to the database");
    app.listen(3000, () => {
        console.log("3000 port listening");
    })
})
.catch( ()=>{
    console.log("not connected");
})