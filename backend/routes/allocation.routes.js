const express = require('express');
const router = express.Router();
const { assignCourse, getAllAllocations, getFacilitatorCourses } = require('../controllers/allocation.controller');
const { verifyToken, authorizeRoles } = require('../middleware/auth.middleware');

router.post('/', verifyToken, authorizeRoles('admin'), assignCourse);
router.get('/', verifyToken, getAllAllocations);
router.get('/:facilitatorId', verifyToken, getFacilitatorCourses);

module.exports = router;
