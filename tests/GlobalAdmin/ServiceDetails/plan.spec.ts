import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Service Details - Plan', { tag: ["@global_admin", "@service_details", "@plan"] }, async ({ page }) => {

    
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

await allure.step("Verify correct plan name : Priority - 1TB Subscription", async() =>{ await expect(page.locator('//div[text()="Plan Name"]/following-sibling::div')).toHaveText('Priority - 1TB Subscription');});

await allure.step("Verify correct start date : August 7, 2024", async() =>{ await expect(page.locator('//div[text()="Start Date"]/following-sibling::div')).toHaveText('August 7, 2024');});

await allure.step("Verify correct plan location type : Fixed 🏠", async() =>{ await expect(page.locator('//div[text()="Plan Location Type"]/following-sibling::div')).toHaveText('Fixed 🏠');});

await allure.step("Verify correct plan currency code : USD", async() =>{ await expect(page.locator('//div[text()="Plan Currency Code"]/following-sibling::div')).toHaveText('USD');});

await allure.step("Verify correct plan usage limit : 1000 GB", async() =>{ await expect(page.locator('//div[text()="Plan Usage Limit"]/following-sibling::div')).toHaveText('1000 GB');});

await allure.step("Verify correct overage plan : Opted Out for excess Priority Data", async() =>{ await expect(page.locator('//div[text()="Overage Plan"]/following-sibling::div')).toHaveText('Opted Out for excess Priority Data');});


});