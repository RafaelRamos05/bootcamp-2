import{test, expect} from '@playwright/test';

test('abre o google', async ({page})=>{
    await page.goto("https://google.com");
    await expect(page). toHaveTitle(/Google/)
});