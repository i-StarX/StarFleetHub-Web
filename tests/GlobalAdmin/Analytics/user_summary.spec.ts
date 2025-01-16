import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Analytics - User Summary', { tag: ["@global_admin", "@analytics", "@user_summary"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Analytics menu : ", async() =>{ await page.locator('//a[@href="#/analytics"]').click();});

await allure.step("Verify correct service plan : Priority - 40GB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[1]/td[1]')).toHaveText('Priority - 40GB Subscription');});

await allure.step("Verify correct count : 1092", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[1]/td[2]')).toHaveText('1092');});

await allure.step("Verify correct service plan : Mobile Priority - 50GB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[2]/td[1]')).toHaveText('Mobile Priority - 50GB Subscription');});

await allure.step("Verify correct count : 40", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[2]/td[2]')).toHaveText('40');});

await allure.step("Verify correct service plan : Priority - 1TB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[3]/td[1]')).toHaveText('Priority - 1TB Subscription');});

await allure.step("Verify correct count : 191", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[3]/td[2]')).toHaveText('191');});

await allure.step("Verify correct service plan : Priority - 2TB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[4]/td[1]')).toHaveText('Priority - 2TB Subscription');});

await allure.step("Verify correct count : 16", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[4]/td[2]')).toHaveText('16');});

await allure.step("Verify correct service plan : Mobile Priority - 50GB", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[5]/td[1]')).toHaveText('Mobile Priority - 50GB');});

await allure.step("Verify correct count : 20", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[5]/td[2]')).toHaveText('20');});

await allure.step("Verify correct service plan : Mobile Priority - 1TB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[6]/td[1]')).toHaveText('Mobile Priority - 1TB Subscription');});

await allure.step("Verify correct count : 1", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[6]/td[2]')).toHaveText('1');});

await allure.step("Verify correct service plan : Priority - 6TB Subscription", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[7]/td[1]')).toHaveText('Priority - 6TB Subscription');});

await allure.step("Verify correct count : 2", async() =>{ await expect(page.locator('//h3[text()="Service Plan Summary"]/following-sibling::table//tr[7]/td[2]')).toHaveText('2');});


});