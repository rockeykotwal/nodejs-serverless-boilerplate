# nodejs-serverless-boilerplate

Node.js serverless boilerplate for AWS Lambda. Runs locally via `serverless-offline` — no Docker required.

## Prerequisites

- Node.js 20+
- AWS CLI configured (`aws configure`) for deployment

## Setup

```bash
npm install
cp .env.example .env
```

## Local Development

```bash
npm run dev
```

Server starts at `http://localhost:3000`.

| Method | Path | Description |
|--------|------|-------------|
| GET | `/dev/health` | Health check |
| GET | `/dev/hello` | Hello, World! |
| GET | `/dev/hello/:name` | Hello, `<name>`! |

> Note: `serverless-offline` prefixes routes with the stage name (e.g. `/dev/health`).

## Testing

```bash
npm test               # run all tests
npm run test:watch     # watch mode
npm run test:coverage  # with coverage report
```

## Linting & Formatting

```bash
npm run lint           # check for lint errors
npm run lint:fix       # auto-fix lint errors
npm run format         # format with Prettier
```

## Deployment

Requires AWS credentials configured locally.

```bash
npm run deploy            # deploy to dev stage
npm run deploy:staging    # deploy to staging stage
npm run deploy:prod       # deploy to prod stage
```

Deploy to a specific region:

```bash
serverless deploy --stage prod --region eu-west-1
```

## Project Structure

```
├── src/
│   ├── handlers/         # one file per Lambda function
│   │   ├── health.js
│   │   └── hello.js
│   └── utils/
│       └── response.js   # shared response helpers
├── tests/
│   └── handlers/         # mirrors src/handlers/
├── .github/workflows/    # GitHub Actions CI
├── serverless.yml        # Serverless Framework config
├── jest.config.js
└── .env.example
```

## Adding a New Handler

1. Create `src/handlers/myHandler.js`
2. Add the function to `serverless.yml` under `functions:`
3. Add tests to `tests/handlers/myHandler.test.js`
