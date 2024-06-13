const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.js');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.send('Hello from node')
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

//update
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "product not found"})
        }
        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: "product not found"})
        }
        res.status(200).json({message: "Product deleted sucessfully"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

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