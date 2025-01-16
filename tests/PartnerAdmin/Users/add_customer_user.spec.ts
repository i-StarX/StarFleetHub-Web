import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Partner Admin - Users - Add Customer User', { tag: ["@partner_admin", "@users", "@pa_add_customer_user"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+partneradmin@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+partneradmin@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Click Users menu : ", async() =>{ await page.locator('//a[@href="#/users"]').click();});

await allure.step("Click Add button : ", async() =>{ await page.getByRole('button', {name : ' Add', exact: true}).click();});

await allure.step("Enter Name : Automation Guy2", async() =>{ await page.locator('#name').fill('Automation Guy2');});

await allure.step("Enter email address : rallen.estrella+tc04@istar-x.com", async() =>{ await page.locator('#email').fill('rallen.estrella+tc04@istar-x.com');});

await allure.step("Enter mobile : +15551231234", async() =>{ await page.locator('#mobile').fill('+15551231234');});

await allure.step("Select role : Customer Reader", async() =>{ await page.locator('[data-testid="allocation-role-selector"]').selectOption('Customer Reader');});

await allure.step("Click Send Invite button : ", async() =>{ await page.getByRole('button', {name : 'Send Invite', exact: true}).click();});


});