const ActivityTracker = require('../models/activityTracker.model');
//const redisClient = require('../config/redis');
const { enqueueNotification } = require('../services/notification.service');
const { Allocation, User, Course, Facilitator } = require('../models');


// Create log
exports.createLog = async (req, res) => {
  try {
    const log = await ActivityTracker.create(req.body);
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

async function notifyManager(data) {
  await enqueueNotification('notifications', data);
}

// Get all logs
exports.getAllLogs = async (req, res) => {
  try {
    const logs = await ActivityTracker.findAll();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get logs by facilitator (with allocationId)
exports.getLogsByAllocation = async (req, res) => {
  try {
    const logs = await ActivityTracker.findAll({
      where: { allocationId: req.params.allocationId }
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Update a log
exports.updateLog = async (req, res) => {
  try {
    const [updated] = await ActivityTracker.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const log = await ActivityTracker.findByPk(req.params.id);
      res.json(log);
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a log
exports.deleteLog = async (req, res) => {
  try {
    const deleted = await ActivityTracker.destroy({
      where: { id: req.params.id }
    });
    deleted ? res.status(204).send() : res.status(404).json({ error: 'Log not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get logs by facilitator (authenticated user)
