const Activity = require('../models/activity.model');
const { redisClient } = require('../config/redis');

exports.logActivity = async (req, res) => {
  const { action, metadata } = req.body;
  const facilitatorId = req.user.id;

  try {
    const activity = await Activity.create({ facilitatorId, action, metadata });

    // Cache in Redis
    const redisKey = `facilitator:${facilitatorId}:activities`;
    await redisClient.lPush(redisKey, JSON.stringify(activity));
    await redisClient.lTrim(redisKey, 0, 19); // Keep only last 20

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecentActivities = async (req, res) => {
  const facilitatorId = req.user.id;

  const redisKey = `facilitator:${facilitatorId}:activities`;
  const cachedActivities = await redisClient.lRange(redisKey, 0, 19);

  if (cachedActivities.length > 0) {
    return res.json(cachedActivities.map(item => JSON.parse(item)));
  }

  const activities = await Activity.findAll({
    where: { facilitatorId },
    order: [['createdAt', 'DESC']],
    limit: 20,
  });

  res.json(activities);
};
