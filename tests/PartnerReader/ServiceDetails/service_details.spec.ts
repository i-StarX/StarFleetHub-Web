import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Read Only - Service Details - Service Details', { tag: ["@partner_reader", "@service_details", "@pr_service_details"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partnerreader@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partnerreader@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Kit Number : KIT4M00192269PZE", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KIT4M00192269PZE');});

await allure.step("Click Search result : ", async() =>{ await page.locator('//*[@data-testid="item-row-KIT4M00192269PZE"]').click();});

await allure.step("Verify correct account number : ACC-3527079-98057-27", async() =>{ await expect(page.locator('//div[text()="Account Number"]/following-sibling::div')).toHaveText('ACC-3527079-98057-27');});

await allure.step("Verify correct account name : Telespazio (Argentina)", async() =>{ await expect(page.locator('//div[text()="Account Name"]/following-sibling::div')).toHaveText('Telespazio (Argentina)');});

await allure.step("Verify correct region : AR", async() =>{ await expect(page.locator('//div[text()="Region"]/following-sibling::div')).toHaveText('AR');});

await allure.step("Verify correct service line nickname : TPZ-AR_DEMOHP/MINI", async() =>{ await expect(page.locator('//div[text()="Service Line Nickname"]/following-sibling::div')).toHaveText('TPZ-AR_DEMOHP/MINI');});

await allure.step("Verify correct service line number : SL-1257850-78262-78", async() =>{ await expect(page.locator('//div[text()="Service Line Number"]/following-sibling::div')).toHaveText('SL-1257850-78262-78');});

await allure.step("Verify correct  service address : Av. del Libertador 5926, C1428ARP Cdad. Autónoma de Buenos Aires, Argentina", async() =>{ await expect(page.locator('//div[text()="Service Address"]/following-sibling::div')).toHaveText('Av. del Libertador 5926, C1428ARP Cdad. Autónoma de Buenos Aires, Argentina');});

await allure.step("Verify correct service status : Active", async() =>{ await expect(page.locator('//div[text()="Service Status"]/following-sibling::div/div/p')).toHaveText('Active');});

await allure.step("Verify correct ip policy : Public IP", async() =>{ await expect(page.locator('//div[text()="IP Policy"]/following-sibling::div')).toHaveText('Public IP');});

await allure.step("Verify correct kit serial number : KIT4M00192269PZE", async() =>{ await expect(page.locator('//div[text()="Kit Serial Number"]/following-sibling::div')).toHaveText('KIT4M00192269PZE');});

await allure.step("Verify correct terminal id : 302002a1-8610251b-d8c13b36", async() =>{ await expect(page.locator('//div[text()="Terminal Id"]/following-sibling::div')).toHaveText('302002a1-8610251b-d8c13b36');});

await allure.step("Verify correct status : Offline", async() =>{ await expect(page.locator('//div[text()="Status"]/following-sibling::div/div[1]/p')).toHaveText('Offline');});


});