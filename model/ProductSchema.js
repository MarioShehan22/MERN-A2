const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    price: {
        type:Number,
        require:true
    },
    stock : {
        type:Number,
        require:true
    },
    createdAt: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setHours(0, 0, 0, 0)
            return date.toISOString().slice(0, 10);
        }
    },
});
const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;
