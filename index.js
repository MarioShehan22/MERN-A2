const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');

const customerRoute = require('./route/CustomerRoute.js');
const orderRoute = require('./route/OrderRoute');
const productRoute = require('./route/ProductRoute');

require('dotenv').config();
const app = express();
bodyParser.json();
bodyParser.urlencoded({ extended: false });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//http://localhost:3000/api-docs/#/

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('Database Connected...');
    }).catch((error=>{
    console.log(error);
}));

app.listen(process.env.PORT, () => {
    console.log(`Server started & running on port ${process.env.PORT}`);
});

app.use('/api/v1/customers',customerRoute);
app.use('/api/v1/orders', orderRoute);
app.use('/api/v1/products', productRoute);


