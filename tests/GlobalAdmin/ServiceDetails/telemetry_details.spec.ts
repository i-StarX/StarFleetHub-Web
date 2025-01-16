import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Global Admin - Service Details - Telemetry Details', { tag: ["@global_admin", "@service_details", "@telemetry_details"] }, async ({ page }) => {

    
await allure.step("Navigate to Starfleet sign in page : https://dev.starfleethub.com/#/sign-in", async() =>{ await page.goto('https://dev.starfleethub.com/#/sign-in');});

await allure.step("Enter email address : rallen.estrella+auto@istar-x.com", async() =>{ await page.locator('#email').pressSequentially('rallen.estrella+auto@istar-x.com');});

await allure.step("Enter password : iStarX@123", async() =>{ await page.locator('#password').pressSequentially('iStarX@123');});

await allure.step("Wait for 60 seconds : 60000", async() =>{ await page.waitForTimeout(60000);});

await allure.step("Click Sign in button : ", async() =>{ await page.getByRole('button', {name : 'Sign in', exact: true}).click();});

await allure.step("Enter Otp code : 123456", async() =>{ await page.locator('#code').pressSequentially('123456');});

await allure.step("Wait for 5 seconds : 5000", async() =>{ await page.waitForTimeout(5000);});

await allure.step("Click Verify Code button : ", async() =>{ await page.getByRole('button', {name : 'Verify Code', exact: true}).click();});

await allure.step("Search Kit Number : KITP00132562", async() =>{ await page.locator('[placeholder="Search Services"]').fill('KITP00132562');});

await allure.step("Click Search result : ", async() =>{ await page.locator('//*[@data-testid="item-row-KITP00132562"]').click();});

await allure.step("Verify Downlink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Downlink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Uplink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Uplink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Latency : ", async() =>{ await expect(page.locator('//h2[text()="Latency"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Pig Drop Rate : ", async() =>{ await expect(page.locator('//h2[text()="Ping Drop Rate"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Signal Quality : ", async() =>{ await expect(page.locator('//h2[text()="Signal Quality"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Obstruction : ", async() =>{ await expect(page.locator('//h2[text()="Obstruction"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1] ')).toBeVisible();});

await allure.step("Click 3 hours button : ", async() =>{ await page.getByRole('button', {name : '3 Hours', exact: true}).click();});

await allure.step("Verify Downlink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Downlink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Uplink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Uplink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Latency : ", async() =>{ await expect(page.locator('//h2[text()="Latency"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Pig Drop Rate : ", async() =>{ await expect(page.locator('//h2[text()="Ping Drop Rate"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Signal Quality : ", async() =>{ await expect(page.locator('//h2[text()="Signal Quality"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Obstruction : ", async() =>{ await expect(page.locator('//h2[text()="Obstruction"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1] ')).toBeVisible();});

await allure.step("Click 24 hours button : ", async() =>{ await page.getByRole('button', {name : '24 Hours', exact: true}).click();});

await allure.step("Verify Downlink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Downlink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Uplink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Uplink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Latency : ", async() =>{ await expect(page.locator('//h2[text()="Latency"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Pig Drop Rate : ", async() =>{ await expect(page.locator('//h2[text()="Ping Drop Rate"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Signal Quality : ", async() =>{ await expect(page.locator('//h2[text()="Signal Quality"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Obstruction : ", async() =>{ await expect(page.locator('//h2[text()="Obstruction"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1] ')).toBeVisible();});

await allure.step("Click 7 Days button : ", async() =>{ await page.getByRole('button', {name : '7 Days', exact: true}).click();});

await allure.step("Verify Downlink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Downlink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Uplink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Uplink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Latency : ", async() =>{ await expect(page.locator('//h2[text()="Latency"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Pig Drop Rate : ", async() =>{ await expect(page.locator('//h2[text()="Ping Drop Rate"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Signal Quality : ", async() =>{ await expect(page.locator('//h2[text()="Signal Quality"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Obstruction : ", async() =>{ await expect(page.locator('//h2[text()="Obstruction"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1] ')).toBeVisible();});

await allure.step("Click 30 Days button : ", async() =>{ await page.getByRole('button', {name : '30 Days', exact: true}).click();});

await allure.step("Verify Downlink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Downlink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Uplink Throughput : ", async() =>{ await expect(page.locator('//h2[text()="Uplink Throughput"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Latency : ", async() =>{ await expect(page.locator('//h2[text()="Latency"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Pig Drop Rate : ", async() =>{ await expect(page.locator('//h2[text()="Ping Drop Rate"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Signal Quality : ", async() =>{ await expect(page.locator('//h2[text()="Signal Quality"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1]')).toBeVisible();});

await allure.step("Verify Obstruction : ", async() =>{ await expect(page.locator('//h2[text()="Obstruction"]/ancestor::div/following-sibling::div[3]/*[name()="svg"]/*[name()="g"][3]/*[1] ')).toBeVisible();});


});