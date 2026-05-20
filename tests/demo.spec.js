import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('hariprasath');
  await page.getByRole('textbox', { name: 'Email Id' }).click();
  await page.getByRole('textbox', { name: '' }).fill('hari@gmail.com');
});