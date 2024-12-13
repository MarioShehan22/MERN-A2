const Product = require('../model/ProductSchema');
const Customer = require("../model/CustomerSchema");

const saveProduct = async (req,resp)=>{
    try {
        const{name,price,stock} =  req.body;
        const tempProduct = new Product({name,price,stock});
        console.log(tempProduct);
        await tempProduct.save();
        resp.status(201).json('product was Saved!..');
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}
const findAllOutOfStockProduct=async (req,resp)=>{
    try {
        const products = await Product.find({stock: 0});
        resp.status(200).json({message:'product list..',products});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}
const findAllProduct = async (req, resp) => {
    try {
        const {searchText, page, size} =req.query;
        const query = searchText ?{name :{$regex:searchText,$options:'i'}} : {};
        const products = await Product.find(query).skip(page*size).limit(parseInt(size));
        const count = await Product.countDocuments(query);
        resp.status(200).json({message:'Product find All..',dataList:products,dataCount:count});
    } catch (error) {
        console.error(error); // Log the actual error for debugging
        resp.status(500).json({ message: "Internal Server Error" });
    }
};

const findById = async (req, resp) => {
    try {
        const product = await Product.findOne({'_id':req.params.id});
        if (!product){
            return resp.status(404).json({message:'Product not found'});
        }
        resp.status(200).json({message:'Product find..',product});
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: "Internal Server Error" });
    }
};
const deleteProductById=async (req,resp)=>{
    try {
        const {id} =req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product){
            return resp.status(404).json({message:'product not found'});
        }
        resp.status(204).json({message:'product deleted..',product});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}
const updateProductById=async (req,resp)=>{
    try {
        const {id} =req.params;
        const{ name,price,stock } = req.body;
        const product = await Product.findByIdAndUpdate(id,{name,price,stock},{new:true});
        if (!product){
            return resp.status(404).json({message:'Product not found'});
        }
        resp.status(201).json({message:'Product updated..',product});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}

module.exports = {
    saveProduct,findAllOutOfStockProduct,findAllProduct,findById,updateProductById,deleteProductById
}
