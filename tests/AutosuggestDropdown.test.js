const {test ,expect}=require('@playwright/test')
test (' Auto suggest dropdown',async({page})=>{


await page.goto('https://www.redbus.in/')
// Add force: true to bypass overlapping elements
await page.click("//input[@role='combobox' and @id='srcinput']", { force: true })
await page.locator('#srcinput').fill('sangamwadi')

  // ✅ FIXED LINE 10 — correct selector from page snapshot
  await page.waitForSelector("//div[@role='option']", { timeout: 10000 })
  // ✅ FIXED LINE 11 — same selector
  const fromCityOptions = await page.$$("//div[@role='option']")

for (let option of fromCityOptions )
{

const value =await option.textContent()
//console.log(value);
if(value.includes('sangamwadi')){
await option.click()
break;
}
}
await page.waitForTimeout(3000);

})