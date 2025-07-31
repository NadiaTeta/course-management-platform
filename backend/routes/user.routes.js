// routes/user.routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Get all users
router.get('/', userController.getUsers);

// Get a single user by ID
router.get('/:id', userController.getUserById);

// Update user role
router.put('/:id/role', userController.updateUserRole);

// Delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;
