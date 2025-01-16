import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Read Only - Login - Partner Login', { tag: ["@partner_reader", "@login", "@pr_login"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partnerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partnerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Verify Services menu is visible : ", async() =>{ await expect(page.locator('//a[@href="#/kits"]')).toBeVisible();});

await allure.step("Verify Customers menu is visible : ", async() =>{ await expect(page.locator('//a[@href="#/customers"]')).toBeVisible();});

await allure.step("Verify Users menu is visible : ", async() =>{ await expect(page.locator('//a[@href="#/users"]')).toBeVisible();});

await allure.step("Verify Analytics menu is visible : ", async() =>{ await expect(page.locator('//a[@href="#/analytics"]')).toBeVisible();});


});