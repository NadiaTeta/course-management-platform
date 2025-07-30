const redisClient = require('../config/redis');

async function processNotifications() {
  const channel = 'notifications';

  while (true) {
    try {
      const data = await redisClient.brPop(channel, 0);
      if (data) {
        const message = JSON.parse(data.element);
        console.log('Processing notification:', message);
        // Add actual email/push logic here
      }
    } catch (error) {
      console.error('Background worker error:', error);
    }
  }
}

processNotifications();
