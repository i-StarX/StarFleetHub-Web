import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Customer Read Only - Users - Search', { tag: ["@customer_reader", "@users", "@customer_user_search"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+customerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+customerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Users menu : ", async() =>{ await page.locator('//a[@href="#/users"]').click();});

await allure.step("Enter Name : Rallen Customer Reader2", async() =>{ await page.locator('[placeholder="Search Users"]').fill('Rallen Customer Reader2');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//tr//div[text()="Rallen Customer Reader2"]')).toBeVisible();});

await allure.step("Enter email address : rallen.estrella+customerreader2@istar-x.com", async() =>{ await page.locator('[placeholder="Search Users"]').fill('rallen.estrella+customerreader2@istar-x.com');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//tr//div[text()="rallen.estrella+customerreader2@istar-x.com"]')).toBeVisible();});


});