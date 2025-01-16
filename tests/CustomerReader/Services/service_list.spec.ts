import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Customer Read Only - Services - Service List', { tag: ["@customer_reader", "@services", "@customer_service_list"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+customerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+customerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Verify Service button is visible : ", async() =>{ await expect(page.getByRole('button', {name : 'Service  ', exact: true})).toBeVisible();});

await allure.step("Verify Download button is visible : ", async() =>{ await expect(page.getByRole('button', {name : 'Download  ', exact: true})).toBeVisible();});

await allure.step("Verify Pending Activation toggle is visible : ", async() =>{ await expect(page.locator('//*[text()="Pending Activation"]/preceding-sibling::*/input[@type="checkbox"]')).toBeVisible();});

await allure.step("Verify Search field is visible : ", async() =>{ await expect(page.locator('[placeholder="Search Services"]')).toBeVisible();});

await allure.step("Verify Row Number column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="Row No."]')).toBeVisible();});

await allure.step("Verify Service Nickname column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="Service Nickname"]')).toBeVisible();});

await allure.step("Verify Service Line Number column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="Service Line Number"]')).toBeVisible();});

await allure.step("Verify Service Status column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="Service Status"]')).toBeVisible();});

await allure.step("Verify Service Plan column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="Service Plan"]')).toBeVisible();});

await allure.step("Verify Service Allocation column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="Service Allocation"]')).toBeVisible();});

await allure.step("Verify Consumption column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="Consumption"]')).toBeVisible();});

await allure.step("Verify User Terminal column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="User Terminal"]')).toBeVisible();});

await allure.step("Verify Device Status column is visible : ", async() =>{ await expect(page.locator('//tr[@data-testid="item-list"]/th//div[text()="Device Status"]')).toBeVisible();});


});