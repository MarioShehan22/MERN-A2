const mongoose = require('mongoose');
const CustomerSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    phone: {
        type:String,
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
const Customer = mongoose.model('Customer',CustomerSchema);
module.exports = Customer;
