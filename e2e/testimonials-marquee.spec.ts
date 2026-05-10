import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';

async function expectRowsAnimate(page: Page) {
  await page.goto('/');

  const section = page.locator('#testimonials');
  await section.scrollIntoViewIfNeeded();
  await expect(section).toBeVisible();

  const ltr = page.getByTestId('testimonials-marquee-ltr');
  const rtl = page.getByTestId('testimonials-marquee-rtl');
  await expect(ltr).toBeVisible();
  await expect(rtl).toBeVisible();

  const snapshot = async (locator: typeof ltr) =>
    locator.evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        transform: cs.transform,
      };
    });

  const ltrBefore = await snapshot(ltr);
  const rtlBefore = await snapshot(rtl);

  await page.waitForTimeout(900);

  const ltrAfter = await snapshot(ltr);
  const rtlAfter = await snapshot(rtl);

  expect(ltrAfter.transform).not.toBe(ltrBefore.transform);
  expect(rtlAfter.transform).not.toBe(rtlBefore.transform);
  expect(ltrAfter.transform).not.toBe('none');
  expect(rtlAfter.transform).not.toBe('none');
}

test('testimonials marquee rows animate (default motion)', async ({ page }) => {
  await expectRowsAnimate(page);
});
