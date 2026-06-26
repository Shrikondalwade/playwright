const { test, expect } = require('@playwright/test');

test('Home page', async ({ page }) => {
  // Open URL
  await page.goto('https://www.demoblaze.com/');

  // Get Page Title
  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle);

  // Verify Page Title
  await expect(page).toHaveTitle('STORE');

  // Get Page URL
  const pageURL = page.url();
  console.log('Page URL is:', pageURL);

  // Verify Page URL
  await expect(page).toHaveURL('https://www.demoblaze.com/');
});