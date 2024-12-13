const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    products: [{
        _id:{ type: String, required: true},
        quantity: { type: Number, required: true }
    }],
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    totalAmount: {
        type:Number,
        require:true
    },
    orderDate: {
        type: Date,
        default: () => {
            const date = new Date();
            date.setHours(0, 0, 0, 0)
            return date.toISOString().slice(0, 10);
        }
    },
});
const Order = mongoose.model('Order',OrderSchema);
module.exports = Order;
