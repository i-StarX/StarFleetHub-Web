import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Services - Search', { tag: ["@global_admin", "@services", "@search"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Customer : Test Customer", async() =>{ await page.locator('[placeholder="Search Services"]').fill('Test Customer');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//*[@data-testid="item-row-KITP00132559"]//p[text()="Test Customer"]')).toBeVisible();});

await allure.step("Search Kit Number : KITP00132562", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KITP00132562');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//*[@data-testid="item-row-KITP00132559"]//div[text()="KITP00132559"]')).toBeVisible();});

await allure.step("Search Service Line Name : MAY-PE_BHBOND001", async() =>{ await page.locator('[placeholder="Search Services"]').fill('MAY-PE_BHBOND001');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//*[@data-testid="item-row-KITP00132562"]//p[text()="MAY-PE_BHBOND001"]')).toBeVisible();});

await allure.step("Search Plan ID : SL-1544617-69112-72", async() =>{ await page.locator('[placeholder="Search Services"]').fill('SL-1544617-69112-72');});

await allure.step("Verify search result : ", async() =>{ await expect(page.locator('//*[@data-testid="item-row-KITP00132562"]//p[text()="SL-1544617-69112-72"]')).toBeVisible();});


});