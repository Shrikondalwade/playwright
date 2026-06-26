const{test,expect}=require('@playwright/test')
test('Hiddandropdown',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded' })
await page.locator("//input[@placeholder='Username']").fill('Admin');
await page.locator('//input[@type="password"]').fill('admin123');

await page.locator("//button[@type='submit']").click();
// ✅ LINE 9 FIX
await page.locator("//a[@class='oxd-main-menu-item active']").click();

await page.locator("//label[text()='Job Title']/ancestor::div[contains(@class,'oxd-input-group')]//div[@class='oxd-select-text-input']").click();
await page.waitForTimeout(5000);

await page.$$("//div[@role='option']")
const options = await page.$$("//div[@role='option']")
for(let option of options){
  const value = await option.textContent()
  //console.log(value.trim())

        if (value.trim() === 'QA Engineer') {   // Replace with your desired value
            await option.click();
            break;
        }
    }


}
})