const { handler } = require('../../src/handlers/health');

describe('health handler', () => {
  it('returns 200 with status ok', async () => {
    const result = await handler();
    expect(result.statusCode).toBe(200);
  });

  it('returns a valid JSON body', async () => {
    const result = await handler();
    const body = JSON.parse(result.body);
    expect(body.status).toBe('ok');
    expect(body.timestamp).toBeDefined();
    expect(body.stage).toBeDefined();
  });

  it('includes CORS headers', async () => {
    const result = await handler();
    expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
  });
});
