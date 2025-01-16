import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Analytics - Customer Details', { tag: ["@global_admin", "@analytics", "@customer_details"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Analytics menu : ", async() =>{ await page.locator('//a[@href="#/analytics"]').click();});

await allure.step("Verify correct partner name : OK Info", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[1]/td[1]')).toHaveText('OK Info');});

await allure.step("Verify correct number of customer : 3", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[1]/td[2]')).toHaveText('3');});

await allure.step("Verify correct partner name : partner1", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[2]/td[1]')).toHaveText('partner1');});

await allure.step("Verify correct number of customer : 3", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[2]/td[2]')).toHaveText('3');});

await allure.step("Verify correct partner name : Telepa", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[3]/td[1]')).toHaveText('Telepa');});

await allure.step("Verify correct number of customer : 0", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[3]/td[2]')).toHaveText('0');});

await allure.step("Verify correct partner name : PTT", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[4]/td[1]')).toHaveText('PTT');});

await allure.step("Verify correct number of customer : 0", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[4]/td[2]')).toHaveText('0');});

await allure.step("Verify correct partner name : Sencinet", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[5]/td[1]')).toHaveText('Sencinet');});

await allure.step("Verify correct number of customer : 2", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[5]/td[2]')).toHaveText('2');});

await allure.step("Verify correct partner name : Tota Customers", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[6]/td[1]')).toHaveText('Tota Customers');});

await allure.step("Verify correct number of customer : 8", async() =>{ await expect(page.locator('//h2[text()="Customer Summary"]/ancestor::div[@data-testid="tile-content"]//tr[6]/td[2]')).toHaveText('8');});


});