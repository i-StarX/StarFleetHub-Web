import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Customer Read Only - Service Details - Plan', { tag: ["@customer_reader", "@service_details", "@customer_plan"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+customerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+customerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Kit Number : KIT4M00192269PZE", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KIT4M00192269PZE');});

await allure.step("Click Search result : ", async() =>{ await page.locator('//*[@data-testid="item-row-KIT4M00192269PZE"]').click();});

await allure.step("Verify correct plan name : Priority - 40GB Subscription", async() =>{ await expect(page.locator('//div[text()="Plan Name"]/following-sibling::div')).toHaveText('Priority - 40GB Subscription');});

await allure.step("Verify correct start date : 6 July 2024", async() =>{ await expect(page.locator('//div[text()="Start Date"]/following-sibling::div')).toHaveText('6 July 2024');});

await allure.step("Verify correct plan location type : Fixed 🏠", async() =>{ await expect(page.locator('//div[text()="Plan Location Type"]/following-sibling::div')).toHaveText('Fixed 🏠');});

await allure.step("Verify correct plan usage limit : 40 GB", async() =>{ await expect(page.locator('//div[text()="Plan Usage Limit"]/following-sibling::div')).toHaveText('40 GB');});

await allure.step("Verify correct overage plan : Opted Out for excess Priority Data", async() =>{ await expect(page.locator('//div[text()="Overage Plan"]/following-sibling::div')).toHaveText('Opted Out for excess Priority Data');});


});