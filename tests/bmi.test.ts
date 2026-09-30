import { describe, it, expect } from 'vitest';

describe('BMI & TDEE Calculations', () => {
  it('should accurately calculate BMI for normal weight individual', () => {
    const heightCm = 175;
    const weightKg = 70;
    const heightM = heightCm / 100;
    const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));

    expect(bmi).toBe(22.9);
    expect(bmi).toBeGreaterThanOrEqual(18.5);
    expect(bmi).toBeLessThanOrEqual(24.9);
  });

  it('should calculate Basal Metabolic Rate using Mifflin-St Jeor formula', () => {
    const weightKg = 74;
    const heightCm = 172;
    const age = 26;

    // Male formula: 10*weight + 6.25*height - 5*age + 5
    const bmrMale = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    expect(bmrMale).toBe(1690);

    // Moderate activity multiplier 1.55
    const tdee = Math.round(bmrMale * 1.55);
    expect(tdee).toBe(2620);
  });
});
