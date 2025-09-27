// Service to calculate final speed based on initial speed and terrain inclines

export class SpeedCalculationService {
  /**
   * Calculates character's final speed after traversing terrain with inclines
   * @param startingSpeed - Character's initial speed (must be positive)
   * @param terrainInclines - Array of incline angles in degrees (positive = uphill, negative = downhill)
   * @returns Final speed after all terrain adjustments
   */
  static calculateFinalSpeed(startingSpeed: number, terrainInclines: number[]): number {
    let characterSpeed = startingSpeed;

    // Process each terrain segment
    for (const inclineAngle of terrainInclines) {
      characterSpeed = characterSpeed - inclineAngle;

      // Character cannot move backwards
      if (characterSpeed < 0) {
        characterSpeed = 0;
        break; 
      }
    }

    return Math.round(characterSpeed);
  }

// Validates input parameters for speed calculation

  static validateInputs(startingSpeed: number, terrainInclines: number[]): boolean {
    // Starting speed must be a positive number
    if (typeof startingSpeed !== 'number' || startingSpeed < 0) {
      return false;
    }

    // Terrain inclines must be an array
    if (!Array.isArray(terrainInclines)) {
      return false;
    }

    // All incline values must be numbers
    for (const inclineValue of terrainInclines) {
      if (typeof inclineValue !== 'number') {
        return false;
      }
    }

    return true;
  }

// Gets error message for invalid inputs
  static getInputValidationError(startingSpeed: number, terrainInclines: number[]): string {
    if (typeof startingSpeed !== 'number' || startingSpeed < 0) {
      return 'Starting speed must be a positive number';
    }

    if (!Array.isArray(terrainInclines)) {
      return 'Terrain inclines must be an array of numbers';
    }

    for (const inclineValue of terrainInclines) {
      if (typeof inclineValue !== 'number') {
        return 'All terrain incline values must be numbers';
      }
    }

    return 'Invalid input provided';
  }
}