import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Customer Read Only - Service Details - Data Usage', { tag: ["@customer_reader", "@service_details", "@customer_data_usage"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+customerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+customerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Kit Number : KIT400916123", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KIT400916123');});

await allure.step("Click Search result : ", async() =>{ await page.locator('//*[@data-testid="item-row-KITP00264916"]').click();});

await allure.step("Verify Usage Data graph : ", async() =>{ await expect(page.locator('//h2[text()="Usage Data by Starlink Bill Cycle"]/ancestor::div/following-sibling::div/div[3]/*[name()="svg"]/*[name()="g"][2]/*')).toBeVisible();});


});