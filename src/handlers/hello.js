const { success, error } = require('../utils/response');

const handler = async (event) => {
  try {
    const name = event.pathParameters?.name || 'World';
    return success({
      message: `Hello, ${name}!`,
      stage: process.env.STAGE || 'local',
    });
  } catch (err) {
    return error('Internal server error');
  }
};

module.exports = { handler };
