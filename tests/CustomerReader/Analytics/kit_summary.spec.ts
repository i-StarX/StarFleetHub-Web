import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Customer Read Only - Analytics - Kit Summary', { tag: ["@customer_reader", "@analytics", "@customer_kit_summary"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+customerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+customerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Analytics menu : ", async() =>{ await page.locator('//a[@href="#/analytics"]').click();});

await allure.step("Verify correct status : Online", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[1]/td[1]')).toHaveText('Online');});

await allure.step("Verify correct count of kit : 0", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[1]/td[2]')).toHaveText('0');});

await allure.step("Verify correct status : Online (Alerts)", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[2]/td[1]')).toHaveText('Online (Alerts)');});

await allure.step("Verify correct count of kit : 0", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[2]/td[2]')).toHaveText('0');});

await allure.step("Verify correct status : Offline", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[3]/td[1]')).toHaveText('Offline');});

await allure.step("Verify correct count of kit : 7", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[3]/td[2]')).toHaveText('7');});

await allure.step("Verify correct status : Total Active", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[4]/td[1]')).toHaveText('Total Active');});

await allure.step("Verify correct count of kit : 7", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[4]/td[2]')).toHaveText('7');});

await allure.step("Verify correct status : Pending Activation", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[5]/td[1]')).toHaveText('Pending Activation');});

await allure.step("Verify correct count of kit : 1", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[5]/td[2]')).toHaveText('1');});

await allure.step("Verify correct status : Inactive", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[6]/td[1]')).toHaveText('Inactive');});

await allure.step("Verify correct count of kit : 2", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[6]/td[2]')).toHaveText('2');});

await allure.step("Verify correct status : Total Devices", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[7]/td[1]')).toHaveText('Total Devices');});

await allure.step("Verify correct count of kit : 10", async() =>{ await expect(page.locator('//h3[text()="Device Summary"]/following-sibling::table//tr[7]/td[2]')).toHaveText('10');});


});