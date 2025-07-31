const express = require('express');
const router = express.Router();
const {
  createLog,
  getAllLogs,
  getLogsByAllocation,
  updateLog,
  deleteLog,
  //getLogsByFacilitator,
  //getLogsByWeek,
} = require('../controllers/activityTracker.controller');
const { verifyToken, authorizeRoles } = require('../middleware/auth.middleware');

// Facilitator routes
router.post('/', verifyToken, authorizeRoles('facilitator'), createLog);
//router.get('/my-logs', verifyToken, authorizeRoles('facilitator'), getLogsByFacilitator);
router.put('/:id', verifyToken, authorizeRoles('facilitator'), updateLog);
router.delete('/:id', verifyToken, authorizeRoles('facilitator'), deleteLog);

// Manager routes
router.get('/', verifyToken, authorizeRoles('manager'), getAllLogs);
router.get('/:id', verifyToken, authorizeRoles('manager'), getLogsByAllocation);
//router.get('/week/:weekNumber', verifyToken, authorizeRoles('manager'), getLogsByWeek);

module.exports = router;
