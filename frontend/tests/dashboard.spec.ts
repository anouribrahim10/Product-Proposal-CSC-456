import { test, expect } from '@playwright/test';

test('successfully interacts with the dashboard UI', async ({ page }) => {
  await page.goto('/');

  // Verify the page title or brand name is visible
  await expect(page.locator('text=GradePilot').first()).toBeVisible();

  // Find the sync button by text and interact with it
  const syncButton = page.locator('button', { hasText: 'Sync Google Calendar' });
  await expect(syncButton).toBeVisible();
  await syncButton.click();

  // Verify the upload hub area is visible
  await expect(page.locator('text=Upload Hub').first()).toBeVisible();
});
