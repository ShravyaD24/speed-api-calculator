import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import speedCalculationRoutes from '../routes/speedRoutes.js';

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// API routes
app.use('/api', speedCalculationRoutes);

// Root endpoint with API information
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Speed Calculator API',
    version: '1.0.0',
    description: 'Calculate character speed based on terrain inclines',
    endpoints: {
      health: 'GET /api/health',
      calculate: 'POST /api/calculate-speed'
    }
  });
});

export const handler = serverless(app);