// routes/user.routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken, authorizeRoles } = require('../middleware/auth.middleware');


// Get all users
router.get('/', verifyToken, authorizeRoles('manager'), userController.getUsers);

// Get a single user by ID
router.get('/:id', verifyToken, authorizeRoles('manager'), userController.getUserById);

// Update user role
router.put('/:id/role', verifyToken, authorizeRoles('manager'), userController.updateUserRole);

// Delete user
router.delete('/:id', verifyToken, authorizeRoles('manager'), userController.deleteUser);

router.post('/', verifyToken, authorizeRoles('manager'), userController.createUser)
module.exports = router;
