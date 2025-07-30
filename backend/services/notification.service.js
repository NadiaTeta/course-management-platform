const redisClient = require('../config/redis');

async function enqueueNotification(channel, message) {
  await redisClient.lPush(channel, JSON.stringify(message));
}

module.exports = { enqueueNotification };
