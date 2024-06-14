const Product = require("../models/product");

const getproducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateproducts = async (req, res) => {
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
};

const createproducts = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteproduct = async (req, res) => {
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
};

const getproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports= {
    getproducts,
    updateproducts,
    createproducts,
    deleteproduct,
    getproduct
};