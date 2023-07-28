// @ts-check
import { test, expect } from '@playwright/test';

test('has random fact & cocktail', async ({ page }) => {
  await page.goto('http://localhost:5173/');


  const fact = await page.getByTestId("data-fact");
  const cocktail = await page.getByTestId("data-cocktail");

  console.log({ fact, cocktail })


  const factContent = await fact.textContent();
  const cocktailContent = await cocktail.textContent();

  console.log({ factContent, cocktailContent })

  await expect(factContent?.length).toBeGreaterThan(0);
  await expect(cocktailContent?.length).toBeGreaterThan(0);
});

