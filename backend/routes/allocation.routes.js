const express = require('express');
const router = express.Router();
const allocationController = require('../controllers/allocation.controller');
const { assignCourse, getAllAllocations, getFacilitatorCourses } = require('../controllers/allocation.controller');
const { verifyToken, authorizeRoles } = require('../middleware/auth.middleware');

router.post('/', verifyToken, authorizeRoles('manager'), allocationController.assignCourse);
router.get('/', verifyToken, authorizeRoles('manager'), allocationController.getAllAllocations);
router.get('/:facilitatorId', verifyToken, getFacilitatorCourses);
router.delete('/:id', verifyToken, authorizeRoles('manager'), allocationController.deleteAllocation);
router.get('/:id', authorizeRoles('manager'), allocationController.getAllocationById);
router.get('/facilitator-courses', verifyToken, authorizeRoles('facilitators', 'manager'), allocationController.getFacilitatorCourses);
router.put('/:id', verifyToken, authorizeRoles('manager'), allocationController.updateAllocation);


module.exports = router;
