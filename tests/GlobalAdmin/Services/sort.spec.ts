import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Services - Sort', { tag: ["@global_admin", "@services", "@sort"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Sort Service Nickname : ", async() =>{ await page.locator('//tr[@data-testid="item-list"]/th//div[text()="Service Nickname"]').click();});

await allure.step("Verify sort icon is displayed : ", async() =>{ await expect(page.locator('//*[text()="Service Nickname"]/div')).toBeVisible();});

await allure.step("Verify first row : AEM-AR_000001", async() =>{ await expect(page.locator('//tbody/tr[1]/td[2]/div//p[1]')).toHaveText('AEM-AR_000001');});

await allure.step("Sort Service Line Number : ", async() =>{ await page.locator('//tr[@data-testid="item-list"]/th//div[text()="Service Line Number"]').click();});

await allure.step("Verify sort icon is displayed : ", async() =>{ await expect(page.locator('//*[text()="Service Line Number"]/div')).toBeVisible();});

await allure.step("Verify first row : SL-1013240-26962-61", async() =>{ await expect(page.locator('//tbody/tr[1]/td[2]/div//p[2]')).toHaveText('SL-1013240-26962-61');});

await allure.step("Sort Customer Name : ", async() =>{ await page.locator('//tr[@data-testid="item-list"]/th//div[text()="Customer Name"]').click();});

await allure.step("Verify sort icon is displayed : ", async() =>{ await expect(page.locator('//*[text()="Customer Name"]/div')).toBeVisible();});

await allure.step("Verify first row : OKTeam1", async() =>{ await expect(page.locator('//tbody/tr[1]/td[5]/div/p[1]')).toHaveText('OKTeam1');});

await allure.step("Sort Service Plan : ", async() =>{ await page.locator('//tr[@data-testid="item-list"]/th//div[text()="Service Plan"]').click();});

await allure.step("Verify sort icon is displayed : ", async() =>{ await expect(page.locator('//*[text()="Service Plan"]/div')).toBeVisible();});

await allure.step("Verify first row : Mobile Priority - 1TB Subscrip...", async() =>{ await expect(page.locator('//tbody/tr[1]/td[6]/div[1]')).toHaveText('Mobile Priority - 1TB Subscrip...');});


});