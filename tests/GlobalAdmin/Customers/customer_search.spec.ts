import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Customers - Customer Search', { tag: ["@global_admin", "@customers", "@customer_search"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Partners menu : ", async() =>{ await page.locator('//a[@href="#/partners"]').click();});

await allure.step("Click Impersonate button on OK info partner : ", async() =>{ await page.locator('//tr[@data-testid="item-row-ok1"]//button').click();});

await allure.step("Click Customer menu : ", async() =>{ await page.locator('//a[@href="#/customers"]').click();});

await allure.step("Search customer : OKT", async() =>{ await page.locator('[placeholder="Starts with"]').fill('OKT');});

await allure.step("Verify search result : OKTeam1", async() =>{ await expect(page.locator('//tr[1]/td[2]/div/div[1]')).toHaveText('OKTeam1');});

await allure.step("Verify search result : okt1", async() =>{ await expect(page.locator('//tr[1]/td[2]/div/div[2]')).toHaveText('okt1');});


});