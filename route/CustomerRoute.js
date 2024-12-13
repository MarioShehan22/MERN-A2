const express = require('express');
const customerController = require('../controller/CustomerController');
const router = express.Router();

/**
 * @swagger
 * /api/v1/customers/create:
 *   post:
 *     summary: Create a new Customer
 *     tags: [customers]
 *     description: Creates a new Customer with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../model/CustomerSchema'
 *     responses:
 *       201:
 *         description: Customer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                    $ref: '../model/CustomerSchema'
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
router.post('/create', customerController.saveCustomer);
/**
 * @swagger
 * /api/v1/customers/find-by-id/675993512ab618f473c3c566:
 *   get:
 *     summary: return customer find by id
 *     tags: [customers]
 *     responses:
 *       200:
 *         description: customer find by id
 */
router.get('/find-by-id/:id', customerController.findCustomerById);
/**
 * @swagger
 * /api/v1/customers/delete-by-id/id:
 *   delete:
 *     summary: delete an exists Customer
 *     tags: [customers]
 *     description: delete an exists Customer with the provided id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../model/CustomerSchema'
 *     responses:
 *       204:
 *         description: Customer delete successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                    $ref: '../model/CustomerSchema'
 */
router.delete('/delete-by-id/:id', customerController.deleteCustomerById);
/**
 * @swagger
 * /api/v1/customers/update/id:
 *   put:
 *     summary: update an exists Customer
 *     tags: [customers]
 *     description: Update an exists Customer with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../model/CustomerSchema'
 *     responses:
 *       201:
 *         description: Customer Update successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                    $ref: '../model/CustomerSchema'
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
router.put('/update/:id', customerController.updateCustomerById);
/**
 * @swagger
 * /api/v1/customers/find-all:
 *   get:
 *     summary: return customer list
 *     tags: [customers]
 *     responses:
 *       200:
 *         description: return customer list
 */
router.get('/find-all', customerController.findAllCustomers);
/**
 * @swagger
 * /api/v1/customers/customer-count:
 *   get:
 *     summary: return customer count
 *     tags: [customers]
 *     responses:
 *       200:
 *         description: return customer count
 */
router.get('/customer-count',customerController.findCustomersCount);
module.exports=router;

// • Count the total number of customers.
