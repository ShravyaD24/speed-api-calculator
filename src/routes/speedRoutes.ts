import { Router } from 'express';
import { SpeedCalculationController } from '../controllers/speedController.js';

// Create a new router for our API endpoints
const router = Router();

/**
 * POST /calculate-speed
 * Main endpoint for character speed calculation
 */
router.post('/calculate-speed', SpeedCalculationController.calculateCharacterSpeed);

/**
 * GET /health
 * Health check endpoint to test if API is working
 */
router.get('/health', SpeedCalculationController.healthCheck);

// Export the router so other files can use it
export default router;