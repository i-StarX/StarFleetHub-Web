import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Read Only - Navigation Elements - Website navigation', { tag: ["@partner_reader", "@navigation", "@pr_navigation"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partnerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partnerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Users menu : ", async() =>{ await page.locator('//a[@href="#/users"]').click();});

await allure.step("Verify URL : /users", async() =>{ await expect(page).toHaveURL(/\/users/);});

await allure.step("Click Analytics menu : ", async() =>{ await page.locator('//a[@href="#/analytics"]').click();});

await allure.step("Verify URL : /analytics", async() =>{ await expect(page).toHaveURL(/\/analytics/);});

await allure.step("Click Services menu : ", async() =>{ await page.locator('//a[@href="#/services"]').click();});

await allure.step("Verify URL : /kits", async() =>{ await expect(page).toHaveURL(/\/kits/);});


});