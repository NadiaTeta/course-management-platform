const express = require('express');
const router = express.Router();
const { logActivity, getRecentActivities } = require('../controllers/activity.controller');
const { verifyToken, authorizeRoles } = require('../middleware/auth.middleware');

router.post('/', verifyToken, authorizeRoles('facilitator'), logActivity);
router.get('/', verifyToken, authorizeRoles('facilitator'), getRecentActivities);

module.exports = router;
