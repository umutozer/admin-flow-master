const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Dashboard Stats
router.get('/dashboard/stats', mainController.getDashboardStats);
router.get('/dashboard/sales-chart', mainController.getSalesPerformance);

// User Management
router.get('/users', mainController.getAllUsers);
router.post('/users', mainController.createUser);
router.put('/users/:id', mainController.updateUser);
router.delete('/users/:id', mainController.deleteUser);

// Product Catalog
router.get('/products', mainController.getAllProducts);
router.put('/products/:id/stock', mainController.updateProductStock);
router.get('/categories', mainController.getCategories);

module.exports = router;