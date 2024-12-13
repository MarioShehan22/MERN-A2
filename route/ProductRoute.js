const express = require('express');
const productController = require('../controller/ProductController');
const router = express.Router();
/**
 * @swagger
 * /api/v1/products/create:
 *   post:
 *     summary: Create a new Product
 *     tags: [Products]
 *     description: Creates a new product with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../model/ProductSchema'
 *     responses:
 *       201:
 *         description: product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                    $ref: '../model/ProductSchema'
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
router.post('/create', productController.saveProduct);
/**
 * @swagger
 * /api/v1/products/outOfStockProduct:
 *   get:
 *     summary: Returns list of all outOfStockProduct
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/outOfStockProduct',productController.findAllOutOfStockProduct);
/**
 * @swagger
 * /api/v1/products/find-product-by-id/675564c97181ec87bae8fba4:
 *   get:
 *     summary: Returns product find by id
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/find-product-by-id/:id',productController.findById);
/**
 * @swagger
 * /api/v1/products/find-all-product?searchText=&page =1&size=4:
 *   get:
 *     summary: Returns list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
router.get('/find-all-product',productController.findAllProduct);
/**
 * @swagger
 * /api/v1/customers//update-product/id:
 *   put:
 *     summary: update an exists Product
 *     tags: [Products]
 *     description: Update an exists Product with the provided information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../model/ProductSchema'
 *     responses:
 *       201:
 *         description: Product Update successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                    $ref: '../model/ProductSchema'
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
router.put('/update-product/:id',productController.updateProductById);
/**
 * @swagger
 * /api/v1/products/delete-product/id:
 *   delete:
 *     summary: delete an exists Product
 *     tags: [Products]
 *     description: delete an exists Product with the provided id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '../model/ProductSchema'
 *     responses:
 *       204:
 *         description: Product delete successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                    $ref: '../model/ProductSchema'
 */
router.delete('/delete-product/:id',productController.deleteProductById);
module.exports=router;
