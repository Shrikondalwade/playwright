const { test, expect } = require('@playwright/test');

test.describe('Handling JavaScript Alerts', () => {

    // Alert with OK
    test('Alert with OK', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        page.on('dialog', async dialog => {
            console.log(dialog.type());      // alert
            console.log(dialog.message());   // Alert message

            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toContain('I am an alert box!');

            await dialog.accept(); // Click OK
        });

        await page.click('#alertBtn');

        await page.waitForTimeout(3000);
    });


    // Confirmation Alert - Click OK
    test('Confirmation Alert - OK', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        page.on('dialog', async dialog => {
            console.log(dialog.type());      // confirm
            console.log(dialog.message());   // Press a button!

            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toContain('Press a button!');

            await dialog.accept(); // Click OK
        });

        await page.click('#confirmBtn');

        await expect(page.locator('#demo')).toHaveText('You pressed OK!');

        await page.waitForTimeout(3000);
    });


    // Confirmation Alert - Click Cancel
    test('Confirmation Alert - Cancel', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        page.on('dialog', async dialog => {
            console.log(dialog.type());      // confirm
            console.log(dialog.message());   // Press a button!

            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toContain('Press a button!');

            await dialog.dismiss(); // Click Cancel
        });

        await page.click('#confirmBtn');

        await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');

        await page.waitForTimeout(3000);
    });

});