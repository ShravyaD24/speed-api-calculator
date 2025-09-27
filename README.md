# Speed Calculator API

A simple REST API that calculates a gaming character's final speed based on terrain inclines.

## Problem Statement

In gaming environments, characters move across varied terrain - uphill slopes slow them down, downhill sections speed them up. This API calculates the final character speed after traversing multiple terrain segments.

## Solution

**Technology Stack:**
- TypeScript & Node.js for robust backend development
- Express.js for REST API framework  
- AWS Lambda for serverless deployment
- API Gateway for HTTP request handling
- AWS CDK for infrastructure management


**Prerequisites:** Node.js 18+ and AWS CLI configured

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run tests**
   ```bash
   npm test
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

## API Usage

### Calculate Character Speed

**Endpoint:** `POST /api/calculate-speed`

**Request:**
```json
{
  "initialSpeed": 60,
  "inclines": [0, 30, 0, -45, 0]
}
```

**Response:**
```json
{
  "finalSpeed": 75
}
```
