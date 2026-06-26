const {test ,expect}=require('@playwright/test')
test (' orange hr test ',async({page})=>{


await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// Add force: true to bypass overlapping elements
//await page.click("//input[@role='combobox' and @id='srcinput']", { force: true })
await page.locator("//input[@name='username']").fill('admin')
await page.locator("//input[@name='password']").fill('admin123')

await page.click("//button[@type='submit']")


})