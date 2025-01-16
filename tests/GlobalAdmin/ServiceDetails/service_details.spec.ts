import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Service Details - Service Details', { tag: ["@global_admin", "@service_details", "@service_details"] }, async ({ page }) => {

    
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

await allure.step("Verify correct account number : ACC-3527200-41262-99", async() =>{ await expect(page.locator('//div[text()="Account Number"]/following-sibling::div')).toHaveText('ACC-3527200-41262-99');});

await allure.step("Verify correct account name : Dev Account", async() =>{ await expect(page.locator('//div[text()="Account Name"]/following-sibling::div')).toHaveText('Dev Account');});

await allure.step("Verify correct region : AU", async() =>{ await expect(page.locator('//div[text()="Region"]/following-sibling::div')).toHaveText('AU');});

await allure.step("Verify correct service line nickname : MAY-PE_BHBOND002", async() =>{ await expect(page.locator('//div[text()="Service Line Nickname"]/following-sibling::div')).toHaveText('MAY-PE_BHBOND002');});

await allure.step("Verify correct service line number : SL-1549903-15177-77", async() =>{ await expect(page.locator('//div[text()="Service Line Number"]/following-sibling::div')).toHaveText('SL-1549903-15177-77');});

await allure.step("Verify correct  service address : PW86+CC9, Canayre 05230, Peru", async() =>{ await expect(page.locator('//div[text()="Service Address"]/following-sibling::div')).toHaveText('PW86+CC9, Canayre 05230, Peru');});

await allure.step("Verify correct service status : Active", async() =>{ await expect(page.locator('//div[text()="Service Status"]/following-sibling::div/div/p')).toHaveText('Active');});

await allure.step("Verify correct ip policy : Default", async() =>{ await expect(page.locator('//div[text()="IP Policy"]/following-sibling::div')).toHaveText('Default');});

await allure.step("Verify correct kit serial number : KITP00132559", async() =>{ await expect(page.locator('//div[text()="Kit Serial Number"]/following-sibling::div')).toHaveText('KITP00132559');});

await allure.step("Verify correct terminal id : 01000000-00000000-005329ca", async() =>{ await expect(page.locator('//div[text()="Terminal Id"]/following-sibling::div')).toHaveText('01000000-00000000-005329ca');});

await allure.step("Verify correct status : Online (Alerts)", async() =>{ await expect(page.locator('//div[text()="Status"]/following-sibling::div/div[1]/p')).toHaveText('Online (Alerts)');});


});