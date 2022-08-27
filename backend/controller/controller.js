import Product from "../models/models.js";

const getAllProduct = async function (req, res) {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const getSingleProduct = async function (req, res) {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });
    }
}

const createProduct = async function (req, res) {
    const product = new Product(req.body);
    try {
        product.save();
        res.status(201).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
}

const updateProduct = async function (req, res) {
    try {
        const cekId = await Product.findById(req.params.id);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }

    try {
        const updatedProduct = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
        console.log(updatedProduct)
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
}

const deleteProduct = async function (req, res) {
    try {
        const cekId = await Product.findById(req.params.id);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }

    try {
        const deletedProduct = await Product.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedProduct)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
}

export { getAllProduct, getSingleProduct, createProduct, updateProduct, deleteProduct }