const { handler } = require('../../src/handlers/hello');

describe('hello handler', () => {
  it('returns Hello, World! when no name provided', async () => {
    const result = await handler({});
    expect(result.statusCode).toBe(200);
    const body = JSON.parse(result.body);
    expect(body.message).toBe('Hello, World!');
  });

  it('returns Hello, <name>! when name path param is provided', async () => {
    const result = await handler({ pathParameters: { name: 'Rockey' } });
    expect(result.statusCode).toBe(200);
    const body = JSON.parse(result.body);
    expect(body.message).toBe('Hello, Rockey!');
  });

  it('includes stage in response body', async () => {
    const result = await handler({});
    const body = JSON.parse(result.body);
    expect(body.stage).toBeDefined();
  });

  it('includes CORS headers', async () => {
    const result = await handler({});
    expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
  });
});
