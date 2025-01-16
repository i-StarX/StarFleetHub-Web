import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Partners - Add Partner', { tag: ["@global_admin", "@partners", "@add_partner"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Partners menu : ", async() =>{ await page.locator('//a[@href="#/partners"]').click();});

await allure.step("Click Add button : ", async() =>{ await page.getByRole('button', {name : ' Add', exact: true}).click();});

await allure.step("Enter Name : AutoTest", async() =>{ await page.locator('#name').fill('AutoTest');});

await allure.step("Enter partner id : autotest1", async() =>{ await page.locator('#partnerId').fill('autotest1');});

await allure.step("Click Save button : ", async() =>{ await page.getByRole('button', {name : 'Save', exact: true}).click();});


});