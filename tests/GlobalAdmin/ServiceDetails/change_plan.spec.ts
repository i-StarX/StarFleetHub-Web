import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Service Details - Change Plan', { tag: ["@global_admin", "@service_details", "@change_plan"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Kit Number : KITP00132559", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KITP00132559');});

await allure.step("Click Search result : ", async() =>{ await page.locator('//*[@data-testid="item-row-KITP00132559"]').click();});

await allure.step("Click Change button : ", async() =>{ await page.getByRole('button', {name : 'Change', exact: true}).click();});

await allure.step("Select option : Priority - 6TB Subscription", async() =>{ await page.locator('[name="plan"]').selectOption('Priority - 6TB Subscription');});

await allure.step("Click Send Request : ", async() =>{ await page.getByRole('button', {name : 'Send Request', exact: true}).click();});

await allure.step("Click Change button : ", async() =>{ await page.getByRole('button', {name : 'Change', exact: true}).click();});

await allure.step("Select option : Priority - 1TB Subscription", async() =>{ await page.locator('[name="plan"]').selectOption('Priority - 1TB Subscription');});

await allure.step("Click Send Request : ", async() =>{ await page.getByRole('button', {name : 'Send Request', exact: true}).click();});


});