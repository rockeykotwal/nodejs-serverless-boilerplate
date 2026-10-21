const { success } = require('../utils/response');

const handler = async () => {
  return success({
    status: 'ok',
    timestamp: new Date().toISOString(),
    stage: process.env.STAGE || 'local',
  });
};

module.exports = { handler };
