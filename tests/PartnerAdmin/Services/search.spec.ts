import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Admin - Services - Search', { tag: ["@partner_admin", "@services", "@pa_search"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partneradmin@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partneradmin@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Customer : TELESPAZIO", async() =>{ await page.locator('[placeholder="Search Services"]').fill('TELESPAZIO');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//*[@data-testid="item-row-KIT400916123"]//p[text()="TELESPAZIO"]')).toBeVisible();});

await allure.step("Search Kit Number : KIT400916123", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KIT400916123');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//*[@data-testid="item-row-KIT400916123"]//div[text()="KIT400916123"]')).toBeVisible();});

await allure.step("Search Service Line Name : TPZ-AR-0001-DEMO-V4", async() =>{ await page.locator('[placeholder="Search Services"]').fill('TPZ-AR-0001-DEMO-V4');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//*[@data-testid="item-row-KIT400916123"]//p[text()="TPZ-AR-0001-DEMO-V4"]')).toBeVisible();});

await allure.step("Search Plan ID : SL-925811-27760-25", async() =>{ await page.locator('[placeholder="Search Services"]').fill('SL-925811-27760-25');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//*[@data-testid="item-row-KIT400916123"]//p[text()="SL-925811-27760-25"]')).toBeVisible();});


});