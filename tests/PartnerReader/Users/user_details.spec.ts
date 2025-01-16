import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Read Only - Users - User Details', { tag: ["@partner_reader", "@users", "@pr_user_details"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partnerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partnerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Users menu : ", async() =>{ await page.locator('//a[@href="#/users"]').click();});

await allure.step("Enter Name : Rallen Customer Reader", async() =>{ await page.locator('[placeholder="Search Users"]').fill('Rallen Customer Reader');});

await allure.step("Click Search result : ", async() =>{ await page.locator('//tr//div[text()="Rallen Estrella"]').click();});

await allure.step("Verify correct name : Rallen Customer Reader", async() =>{ await expect(page.locator('//div[text()="Name"]/following-sibling::div')).toHaveText('Rallen Customer Reader');});

await allure.step("Verify correct role : customerreader", async() =>{ await expect(page.locator('//div[text()="Role"]/following-sibling::div')).toHaveText('customerreader');});

await allure.step("Verify correct email : rallen.estrella+customerreader@istar-x.com", async() =>{ await expect(page.locator('//div[text()="Email"]/following-sibling::div')).toHaveText('rallen.estrella+customerreader@istar-x.com');});

await allure.step("Verify correct mobile : +15551231234", async() =>{ await expect(page.locator('//div[text()="Mobile"]/following-sibling::div')).toHaveText('+15551231234');});

await allure.step("Verify correct partner name : tpzdemo", async() =>{ await expect(page.locator('//div[text()="Partner Name"]/following-sibling::div')).toHaveText('tpzdemo');});

await allure.step("Verify correct customer name : TELESPAZIO", async() =>{ await expect(page.locator('//div[text()="Customer Name"]/following-sibling::div')).toHaveText('TELESPAZIO');});

await allure.step("Verify correct customer account number : tpz", async() =>{ await expect(page.locator('//div[text()="Customer account number"]/following-sibling::div')).toHaveText('tpz');});

await allure.step("Verify correct user account status : Active", async() =>{ await expect(page.locator('//div[text()="User account status"]/following-sibling::div')).toHaveText('Active');});


});