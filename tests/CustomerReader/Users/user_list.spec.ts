import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Customer Read Only - Users - User List', { tag: ["@customer_reader", "@users", "@customer_user_list"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+customerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+customerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Users menu : ", async() =>{ await page.locator('//a[@href="#/users"]').click();});

await allure.step("Verify Search user is visible : ", async() =>{ await expect(page.locator('[placeholder="Search Users"]')).toBeVisible();});

await allure.step("Verify Row number column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="row no."]')).toBeVisible();});

await allure.step("Verify name/email column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="name / email address"]')).toBeVisible();});

await allure.step("Verify status column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="status"]')).toBeVisible();});

await allure.step("Verify quick actions column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="quick actions"]')).toBeVisible();});


});