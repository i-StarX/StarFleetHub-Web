import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Admin - Analytics - User Summary', { tag: ["@partner_admin", "@analytics", "@pa_user_summary"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partneradmin@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partneradmin@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Analytics menu : ", async() =>{ await page.locator('//a[@href="#/analytics"]').click();});

await allure.step("Verify correct service plan : Priority - 40GB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[1]/td[1]')).toHaveText('Priority - 40GB Subscription');});

await allure.step("Verify correct count : 5", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[1]/td[2]')).toHaveText('5');});

await allure.step("Verify correct service plan : Mobile Priority - 50GB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[2]/td[1]')).toHaveText('Mobile Priority - 50GB Subscription');});

await allure.step("Verify correct count : 2", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[2]/td[2]')).toHaveText('2');});

await allure.step("Verify correct service plan : Priority - 1TB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[3]/td[1]')).toHaveText('Priority - 1TB Subscription');});

await allure.step("Verify correct count : 2", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[3]/td[2]')).toHaveText('2');});

await allure.step("Verify correct allocated count : allocated", async() =>{ await expect(page.locator('//h3[text()="Allocation Summary"]/following-sibling::table//tr[1]/td[1]')).toHaveText('allocated');});

await allure.step("Verify correct count : 10", async() =>{ await expect(page.locator('//h3[text()="Allocation Summary"]/following-sibling::table//tr[1]/td[2]')).toHaveText('10');});

await allure.step("Verify correct unallocated count : unallocated", async() =>{ await expect(page.locator('//h3[text()="Allocation Summary"]/following-sibling::table//tr[2]/td[1]')).toHaveText('unallocated');});

await allure.step("Verify correct count : 0", async() =>{ await expect(page.locator('//h3[text()="Allocation Summary"]/following-sibling::table//tr[2]/td[2]')).toHaveText('0');});


});