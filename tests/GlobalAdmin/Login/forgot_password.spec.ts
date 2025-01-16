import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Login - Forgot Password', { tag: ["@global_admin", "@login", "@forgot_password"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Click Lost Password link : ", async() =>{ await page.locator('//a[text()="Lost password?"]').click();});

await allure.step("Enter email address : rallen.estrella@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella@istar-x.com');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Send button : ", async() =>{ await page.getByRole('button', {name : 'Send', exact: true}).click();});

await allure.step("Verify success message : ", async() =>{ await expect(page.locator('//p[text()="Done! You\'ve been emailed a link to reset your password. Once reset, return here to sign in again."]')).toBeVisible();});


});