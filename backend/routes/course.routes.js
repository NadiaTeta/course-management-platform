const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const { verifyToken } = require('../middleware/auth.middleware');
const { checkRole } = require('../middleware/role.middleware');

console.log(courseController.getCourses);


router.post('/courses', verifyToken, checkRole(['manager']), courseController.createCourse);
router.get('/courses', verifyToken, courseController.getCourses);
router.get('/courses/:id', verifyToken, courseController.getCourseById);
router.get('/facilitator/:facilitatorId', verifyToken, courseController.getFacilitatorCourses);
router.put('/courses/:id', verifyToken, checkRole(['manager']), courseController.updateCourse);
router.delete('/courses/:id', verifyToken, checkRole(['manager']), courseController.deleteCourse);

module.exports = router;
