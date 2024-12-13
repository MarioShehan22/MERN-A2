const express = require('express');
const orderController = require('../controller/OrderController');
const router = express.Router();
/**
 * @swagger
 * /api/v1/orders/create:
 *   post:
 *     summary: Create a new Order
 *     tags: [orders]
 *     description: Creates a new Order with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../model/OrderSchema'
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                    $ref: '../model/OrderSchema'
 *       400:
 *         description: Invalid request body
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post('/create', orderController.saveOrder);
/**
 * @swagger
 * /api/v1/orders/getMostOrderedProduct:
 *   get:
 *     summary: Returns list of all products in most ordered
 *     tags: [orders]
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/getMostOrderedProduct', orderController.getMostOrderedProduct);
/**
 * @swagger
 * /api/v1/orders/getLeastFiveOrders:
 *   get:
 *     summary: Returns get Least Five Orders
 *     tags: [orders]
 *     responses:
 *       200:
 *         description: List of Least Five Orders
 */
router.get('/getLeastFiveOrders', orderController.getLeastFiveOrders);
/**
 * @swagger
 * /api/v1/orders/orders-FindBy-CustomerId/6755520ad9d3c280da3ec372:
 *   get:
 *     summary: Returns orders By Customer ids
 *     tags: [orders]
 *     responses:
 *       200:
 *         description: List of All orders By Customer ids
 */
router.get('/orders-FindBy-CustomerId/:id', orderController.ordersByCustomerFindById);
/**
 * @swagger
 * /api/v1/orders/customers_have_not_any_orders:
 *   get:
 *     summary: return list of customers have not any orders
 *     tags: [orders]
 *     responses:
 *       200:
 *         description: List of All customers have not any orders
 */
router.get('/customers_have_not_any_orders', orderController.customers_have_not_any_orders);
/**
 * @swagger
 * /api/v1/orders/ordersFindByDate/2024-12-07:
 *   get:
 *     summary: return list of orders Find By Date
 *     tags: [orders]
 *     responses:
 *       200:
 *         description: List of All orders Find By Date
 */
router.get('/ordersFindByDate/:date', orderController.ordersFindByDate);
/**
 * @swagger
 * /api/v1/orders/ordersFindByDate/2024-12-07:
 *   get:
 *     summary: return All revenue Find By Date
 *     tags: [orders]
 *     responses:
 *       200:
 *         description: revenue Find By Date
 */
router.get('/revenue-0f-day/:date',orderController.revenueOfGivenDay);
/**
 * @swagger
 * /api/v1/orders/delete-by-id/id:
 *   delete:
 *     summary: delete an exists orders
 *     tags: [orders]
 *     description: delete an exists order with the provided id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../model/OrderSchema'
 *     responses:
 *       204:
 *         description: order delete successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                    $ref: '../model/OrderSchema'
 */
router.delete('/delete-by-id/:id', orderController.deleteOrderById);
module.exports=router;


