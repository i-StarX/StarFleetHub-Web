import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Admin - Customers - Customer Summary', { tag: ["@partner_admin", "@customers", "@pa_customer_summary"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partneradmin@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partneradmin@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Customer menu : ", async() =>{ await page.locator('//a[@href="#/customers"]').click();});

await allure.step("Verify search field is visible : ", async() =>{ await expect(page.locator('[placeholder="Starts with"]')).toBeVisible();});

await allure.step("Verify Add button is visible : ", async() =>{ await expect(page.getByRole('button', {name : ' Add', exact: true})).toBeVisible();});

await allure.step("Verify correct customer name : Bharat Sanchar Nigam Ltd", async() =>{ await expect(page.locator('//tr[@data-testid="item-row-test-123"]/td[2]/div/div[1]')).toHaveText('Bharat Sanchar Nigam Ltd');});

await allure.step("Verify correct customer account number : bsnl", async() =>{ await expect(page.locator('//tr[@data-testid="item-row-test-123"]/td[2]/div/div[2]')).toHaveText('bsnl');});

await allure.step("Verify correct customer name : OKTeam1", async() =>{ await expect(page.locator('//tr[@data-testid="item-row-tpz"]/td[2]/div/div[1]')).toHaveText('OKTeam1');});

await allure.step("Verify correct customer account number : okt1", async() =>{ await expect(page.locator('//tr[@data-testid="item-row-tpz"]/td[2]/div/div[2]')).toHaveText('okt1');});


});