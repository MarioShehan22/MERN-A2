const Customer = require('../model/CustomerSchema');
const saveCustomer = async (req,resp)=>{
    try {
        const{name,email,phone} =  req.body;
        const tempCustomer = new Customer({name,phone,email});
        await tempCustomer.save();
        resp.status(201).json('customer was Saved!..');
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}
const findAllCustomers=async (req,resp)=>{
    try {
        const {searchText, page, size} =req.query;
        const query = searchText ?{name :{$regex:searchText,$options:'i'}} : {};
        const customers = await Customer.find(query).skip(page*size).limit(parseInt(size));
        const count = await Customer.countDocuments(query);
        resp.status(200).json({message:'customer list..',dataList:customers,dataCount:count});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}
const findCustomerById=async (req,resp)=>{
    try{
        const {id} =req.params;
        const customer = await Customer.findById(id);
        if (!customer){
            return resp.status(404).json({message:'customer not found'});
        }
        resp.status(200).json({message:'customer by id',data:customer});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }

}
const updateCustomerById=async (req,resp)=>{
    try {
        const {id} =req.params;
        const{ name,address,salary } = req.body;
        const customer = await Customer.findByIdAndUpdate(id,{name,address,salary},{new:true});
        if (!customer){
            return resp.status(404).json({message:'customer not found'});
        }
        resp.status(201).json({message:'customer updated..',customer});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}
const deleteCustomerById=async (req,resp)=>{
    try {
        const {id} =req.params;
        const customer = await Customer.findByIdAndDelete(id);
        if (!customer){
            return resp.status(404).json({message:'customer not found'});
        }
        resp.status(204).json({message:'customer was deleted..',customer});
    }catch (error){
        resp.status(500).json({message:'something went wrong',error});
    }
}
const findCustomersCount=(req,resp)=>{
    try{
        Customer.countDocuments().then(data=>{
            return resp.status(200).json({'message':'Customers Count...',data});
        })

    }catch (error){
        return resp.status(500).json({'message':'internal server error'});
    }
}

module.exports={
    saveCustomer,findAllCustomers,findCustomerById,updateCustomerById,deleteCustomerById,findCustomersCount
}
