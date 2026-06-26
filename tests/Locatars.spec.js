import { expect } from "@playwright/test";
test('Locators',async({page})=>{
await page.goto("https://www.demoblaze.com/")
await page.locator('//input[@id="loginusername"]').click()
//await page.click('');
await page.fill
})