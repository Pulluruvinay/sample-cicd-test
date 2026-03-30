# Sample CI/CD Test App

Simple Node.js app to test GitHub Actions CI/CD pipeline deployment to ECS.

## Endpoints

- `GET /health` - Health check
- `GET /api/test` - Test endpoint

## Local Testing

```bash
npm install
npm start
```

Visit `http://localhost:3000/health`

## CI/CD Pipeline

Push to `main` branch to trigger automatic deployment to ECS.
