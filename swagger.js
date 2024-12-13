const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {  // Change 'definition' to 'swaggerDefinition'
        openapi: '3.0.0',
        info: {
            title: 'Inventory Management System API',
            version: '1.0.0',
            description: 'API documentation for Inventory Management System',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ]
    },
    apis: [
        './route/CustomerRoute.js',
        './route/OrderRoute.js',
        './route/ProductRoute.js'
    ],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
