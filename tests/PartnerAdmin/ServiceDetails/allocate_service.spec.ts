import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Admin - Service Details - Allocate Service', { tag: ["@partner_admin", "@service_details", "@pa_allocate_service"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partneradmin@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partneradmin@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Kit Number : KITP00020586", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KITP00020586');});

await allure.step("Click Search result : ", async() =>{ await page.locator('//*[@data-testid="item-row-KITP00020586"]').click();});

await allure.step("Click Allocate button : ", async() =>{ await page.getByRole('button', {name : 'Allocate', exact: true}).click();});

await allure.step("Select Test Customer option : testonly", async() =>{ await page.locator('[data-testid="allocation-customer-selector"]').selectOption('testonly');});

await allure.step("Click Save button : ", async() =>{ await page.getByRole('button', {name : 'Save', exact: true}).click();});

await allure.step("Click Allocate button : ", async() =>{ await page.getByRole('button', {name : 'Allocate', exact: true}).click();});

await allure.step("Select None option : TELESPAZIO", async() =>{ await page.locator('[data-testid="allocation-customer-selector"]').selectOption('TELESPAZIO');});

await allure.step("Click Save button : ", async() =>{ await page.getByRole('button', {name : 'Save', exact: true}).click();});


});