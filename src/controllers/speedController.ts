import type { Request, Response } from 'express';
import { SpeedCalculationService } from '../services/speedService.js';

// Controller for handling character speed calculation requests
export class SpeedCalculationController {
  /**
   * POST /calculate-speed endpoint
   * Calculates character's final speed based on terrain
   */
  static calculateCharacterSpeed(req: Request, res: Response): void {
    try {
      // Extract request data
      const { initialSpeed, inclines } = req.body;

      console.log('Processing speed calculation request:', { 
        startingSpeed: initialSpeed, 
        terrainCount: inclines?.length || 0 
      });

      // Validate input data
      const inputsAreValid = SpeedCalculationService.validateInputs(initialSpeed, inclines);
      
      if (!inputsAreValid) {
        // Send error response if input is invalid
        const errorMessage = SpeedCalculationService.getInputValidationError(initialSpeed, inclines);
        console.log('Input validation failed:', errorMessage);
        
        res.status(400).json({ 
          error: 'Invalid input', 
          message: errorMessage 
        });
        return;
      }

      // Calculate the character's final speed
      const finalSpeed = SpeedCalculationService.calculateFinalSpeed(initialSpeed, inclines);
      
      // Log the result for debugging
      console.log('Calculation result:', { finalSpeed });

      // Send success response 
      res.status(200).json({ 
        finalSpeed: finalSpeed 
      });

    } catch (error) {
      console.error('Speed calculation failed:', error);
      
      res.status(500).json({ 
        error: 'Internal server error', 
        message: 'An error occurred while calculating speed' 
      });
    }
  }

  /**
   * GET /health
   * Simple health check endpoint
   */
  static healthCheck(req: Request, res: Response): void {
    res.status(200).json({
      status: 'OK',
      message: 'Speed Calculator API is running',
      timestamp: new Date().toISOString()
    });
  }
}