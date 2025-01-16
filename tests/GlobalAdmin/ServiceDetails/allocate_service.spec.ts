import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Service Details - Allocate Service', { tag: ["@global_admin", "@service_details", "@allocate_service"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Kit Number : KITP00265321", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KITP00265321');});

await allure.step("Click Search result : ", async() =>{ await page.locator('//*[@data-testid="item-row-KITP00265321"]').click();});

await allure.step("Click Allocate button : ", async() =>{ await page.getByRole('button', {name : 'Allocate', exact: true}).click();});

await allure.step("Select OK Info option : OK Info", async() =>{ await page.locator('[data-testid="allocation-partner-selector"]').selectOption('OK Info');});

await allure.step("Select Test Customer option : Test Customer", async() =>{ await page.locator('[data-testid="allocation-customer-selector"]').selectOption('Test Customer');});

await allure.step("Click Save button : ", async() =>{ await page.getByRole('button', {name : 'Save', exact: true}).click();});

await allure.step("Click Allocate button : ", async() =>{ await page.getByRole('button', {name : 'Allocate', exact: true}).click();});

await allure.step("Select None option : None", async() =>{ await page.locator('[data-testid="allocation-partner-selector"]').selectOption('None');});

await allure.step("Click Save button : ", async() =>{ await page.getByRole('button', {name : 'Save', exact: true}).click();});


});