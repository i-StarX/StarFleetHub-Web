import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Partners - Partner Summary', { tag: ["@global_admin", "@partners", "@partner_summary"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Partners menu : ", async() =>{ await page.locator('//a[@href="#/partners"]').click();});

await allure.step("Verify Search is visible : ", async() =>{ await expect(page.locator('[placeholder="Starts with"]')).toBeVisible();});

await allure.step("Verify Add button is visible : ", async() =>{ await expect(page.getByRole('button', {name : ' Add', exact: true})).toBeVisible();});

await allure.step("Verify partner : ", async() =>{ await expect(page.locator('[data-testid="item-row-ok1"]')).toBeVisible();});

await allure.step("Verify partner : ", async() =>{ await expect(page.locator('[data-testid="item-row-partner1"]')).toBeVisible();});

await allure.step("Verify partner : ", async() =>{ await expect(page.locator('[data-testid="item-row-pazio"]')).toBeVisible();});

await allure.step("Verify partner : ", async() =>{ await expect(page.locator('[data-testid="item-row-ptt-abc-123"]')).toBeVisible();});

await allure.step("Verify partner : ", async() =>{ await expect(page.locator('[data-testid="item-row-scn"]')).toBeVisible();});


});