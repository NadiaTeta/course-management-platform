const redisClient = require('../config/redis');

async function processNotifications() {
  const channel = 'notifications';

  while (true) {
    try {
      const data = await redisClient.brPop(channel, 0); // Blocking pop
      if (data) {
        const message = JSON.parse(data.element);
        console.log('Processing notification:', message);
        // TODO: Add actual notification sending logic here (email, push, etc.)
      }
    } catch (error) {
      console.error('Background worker error:', error);
      // Optional: Delay retry to avoid busy loop in case of persistent errors
      await new Promise(res => setTimeout(res, 1000));
    }
  }
}

processNotifications();
