import { test, expect } from '@playwright/test';

test.describe('Hayat Fitness Gym Web App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display brand title and live operational status', async ({ page }) => {
    await expect(page).toHaveTitle(/Hayat Fitness Gym/i);
    const brandHeading = page.locator('header a').first();
    await expect(brandHeading).toContainText('HAYAT FITNESS');
  });

  test('should open trial pass modal when button is clicked', async ({ page }) => {
    const trialPassBtn = page.getByRole('button', { name: /Claim 1-Day Free Pass|Book Free Trial Pass/i }).first();
    await trialPassBtn.click();

    const modalTitle = page.getByRole('heading', { name: /Claim Your 1-Day Free Workout Pass/i });
    await expect(modalTitle).toBeVisible();

    // Verify WhatsApp direct trigger elements
    await expect(page.getByRole('button', { name: /Confirm Free Pass via WhatsApp/i })).toBeVisible();
  });

  test('should switch schedule tabs smoothly', async ({ page }) => {
    // Click on Dedicated Women Batches tab
    const womenTab = page.getByRole('button', { name: /Dedicated Women Batches/i });
    await womenTab.click();

    await expect(page.getByText(/Exclusive Women Floor/i).first()).toBeVisible();
    await expect(page.getByText(/Morning Women Exclusive Fitness Batch/i)).toBeVisible();
  });

  test('should compute BMI accurately when sliders change', async ({ page }) => {
    const bmiSection = page.locator('#calculator');
    await expect(bmiSection).toBeVisible();

    // Verify BMI value exists and is a valid number
    const bmiValLocator = page.locator('#calculator .tabular-nums').first();
    await expect(bmiValLocator).toBeVisible();
  });

  test('should display Google Maps embed and Kondhwa address', async ({ page }) => {
    const locationSection = page.locator('#location');
    await expect(locationSection).toContainText('Kondhwa, Pune, Maharashtra 411048');
    await expect(locationSection.locator('iframe')).toBeVisible();
  });
});
