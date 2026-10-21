const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

const success = (body, statusCode = 200) => ({
  statusCode,
  headers: defaultHeaders,
  body: JSON.stringify(body),
});

const error = (message, statusCode = 500) => ({
  statusCode,
  headers: defaultHeaders,
  body: JSON.stringify({ error: message }),
});

module.exports = { success, error };
