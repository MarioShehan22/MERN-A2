const Order = require("../model/OrderSchema");
const Product = require("../model/ProductSchema");
const Customer = require('../model/CustomerSchema');

const saveOrder = async (req, resp) => {
    try {
        const { products, customerId } = req.body;
        let totalAmount = 0;

        const productPromises = products.map(async (product) => {
            const foundProduct = await Product.findById(product._id);
            console.log(foundProduct);
            let qty = foundProduct.stock - product.quantity;

            if (!foundProduct) {
                throw new Error(`Product with ID ${product._id} not found`);
            }

            await Product.findByIdAndUpdate(product._id,{
                $set:{
                    stock:qty
                }
            },{new:true});

            return foundProduct.price * product.quantity;
        });

        const productTotals = await Promise.all(productPromises);
        totalAmount = productTotals.reduce((sum, subtotal) => sum + subtotal, 0);

        const tempOrder = new Order({
            products,
            customerId,
            totalAmount
        });

        await tempOrder.save();
        return resp.status(201).json({ message: 'Order was saved successfully', order: tempOrder });

    } catch (error) {
        console.error('Order creation error:', error);
        return resp.status(500).json({
            message: 'Something went wrong while creating the order',
            error: error.message
        });
    }
};

const findAllOrders=async (req,resp)=>{
    try {
        const {searchText, page, size} =req.query;
        const query = searchText ?{name :{$regex:searchText,$options:'i'}} : {};
        const order = await Order.find(query).skip(page*size).limit(parseInt(size));
        const count = await Order.countDocuments(query);
        resp.status(200).json({message:'order list..',dataList:order,dataCount:count});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}

const findOrderById = async (req,resp)=>{
    try{
        const { id } =req.params;
        const order = await Order.findById(id);
        if (!order){
            return resp.status(404).json({message:'order not found'});
        }
        resp.status(200).json({message:'order by id',data:order});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }

}

const getMostOrderedProduct = async (req, res) => {
    try {
        const result = await Order.aggregate([
            { $unwind: "$products" },

            {
                $group: {
                    _id: "$products._id",
                    totalOrders: { $sum: 1 },
                    totalQuantity: { $sum: "$products.quantity" }
                }
            },
            { $sort: { totalQuantity: -1 } },

            { $limit: 1 }
        ]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'No orders found' });
        }

        res.status(200).json({
            message: 'Most frequently ordered product found',
            data: result[0]
        });

    } catch (error) {
        console.error('Error finding most ordered product:', error);
        res.status(500).json({
            message: 'Error finding most ordered product',
            error: error.message
        });
    }
};

const getLeastFiveOrders = async (req, res) => {
    try {
        const result = await Order.aggregate([
            { $sort: { date: 1 }},
            { $limit: 5 }
        ]);

        if (result.length === 0) {
            return res.status(404).json({ message: 'No orders found' });
        }
        res.status(200).json({
            message: 'Most frequently ordered product found',
            data: result
        });

    } catch (error) {
        console.error('Error finding most ordered product:', error);
        res.status(500).json({
            message: 'Error finding most ordered product',
            error: error.message
        });
    }
};
const ordersByCustomerFindById = async (req,res)=>{
    try {
        const user = await Customer.findOne({ _id: req.params.id });

        if (!user) {
            return res.status(404).json({ message: "No user found with this id" });
        }

        const order = await Order.find({ customerId: (user?._id||'') });

        if (!order) {
            return res.status(404).json({ message: "No order found for this user" });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
const customers_have_not_any_orders = async (req,res)=>{
    try {
        const customersWithoutOrders = await Customer.aggregate([
            {
                $lookup: {
                    from: 'orders',
                    localField: '_id',
                    foreignField: 'customerId',
                    as: 'orders'
                }
            },
            {
                $match: {
                    orders: { $size: 0 }
                }
            },
            {
                $project: {
                    _id: 1,
                    name:1,
                    email:1,
                }
            }
        ]);

        res.status(200).json(customersWithoutOrders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const ordersFindByDate = async (req,res)=>{
    try {
        const orders = await Order.find({ orderDate: req.params.date });

        if (!orders) {
            return res.status(404).json({ message: "No orders found with this date" });
        }

        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteOrderById=async (req,resp)=>{
    try {
        const {id} =req.params;
        const order = await Order.findByIdAndDelete(id);
        if (!order){
            return resp.status(404).json({message:'order not found'});
        }
        resp.status(204).json({message:'order deleted..',order});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}
const revenueOfGivenDay =async (req,resp)=>{
    const { date } = req.params;
    try {
        const results = await Order.aggregate(
            [
                {
                    $match: { orderDate: { $eq: new Date(date) } }
                },
                {
                    $group: {
                        _id: {
                            orderDate: '$orderDate',
                        },
                        totalAmount: { $sum: '$totalAmount' }
                    }
                },
                {
                    $project: {
                        _id: 1,
                        orderDate: 1,
                        totalAmount: 1
                    }
                }]
        );
        resp.json(results);
    } catch (error) {
        resp.status(500).send('Internal Server Error');
    }
}

module.exports={
    saveOrder,
    findAllOrders,
    findOrderById,
    getMostOrderedProduct,
    getLeastFiveOrders,
    ordersByCustomerFindById,
    customers_have_not_any_orders,
    ordersFindByDate,
    deleteOrderById,
    revenueOfGivenDay
}
