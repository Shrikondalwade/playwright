import { test, expect } from "@playwright/test";
test('Locators', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/");

    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('Shrinathk');

    await page.locator('#loginpassword').fill('Shrinath@168');

    await page.getByRole('button', { name: 'Log in' }).click();

});