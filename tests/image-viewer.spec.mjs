import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const prefix of ["/", "/pt-br/"]) {
  for (const route of ["#projects", "projects/platen/"]) {
    test(`${prefix}${route} enlarges images and returns to the same place`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(prefix + route);
      const trigger = page.locator(".project-figure a").first();
      await expect(trigger).toBeVisible();
      await trigger.focus();
      const position = await page.evaluate(() => scrollY);
      const url = page.url();
      const image = trigger.locator("img");
      const inlineWidth = (await image.boundingBox()).width;
      const source = await image.getAttribute("src");
      const caption = await trigger.locator("..").locator("figcaption").textContent();
      await page.keyboard.press("Enter");
      const viewer = page.getByRole("dialog");
      await expect(viewer).toBeVisible();
      await expect(viewer.locator("img")).toHaveAttribute("src", source);
      expect((await viewer.locator("img").boundingBox()).width).toBeGreaterThan(inlineWidth);
      await expect(viewer.locator("figcaption")).toHaveText(caption);
      await expect(viewer.getByRole("button")).toBeFocused();
      await page.keyboard.press("Tab");
      await expect(viewer.getByRole("button")).toBeFocused();
      await page.keyboard.press("Shift+Tab");
      await expect(viewer.getByRole("button")).toBeFocused();
      await viewer.locator("img").click();
      await expect(viewer).toBeVisible();
      const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(violations.map((item) => item.id)).toEqual([]);
      await page.keyboard.press("Escape");
      await expect(viewer).not.toBeVisible();
      await expect(trigger).toBeFocused();
      expect(page.url()).toBe(url);
      expect(await page.evaluate(() => scrollY)).toBeCloseTo(position, 0);
      await trigger.click();
      await expect(viewer).toBeVisible();
      await page.mouse.click(2, 2);
      await expect(viewer).not.toBeVisible();
      await expect(trigger).toBeFocused();
      expect(await page.evaluate(() => scrollY)).toBeCloseTo(position, 0);
      await trigger.click();
      await viewer.getByRole("button").click();
      await expect(viewer).not.toBeVisible();
      await expect(trigger).toBeFocused();
    });
  }
  test(`${prefix} Latchkey has a real screenshot on home and its story`, async ({ page }) => {
    for (const route of ["#projects", "projects/latchkey/"]) {
      await page.goto(prefix + route);
      const image = page.locator('img[src*="latchkey-"]').first();
      await expect(image).toBeVisible();
      await expect.poll(() => image.evaluate((node) => node.complete && node.naturalWidth > 1000)).toBe(true);
      await image.click();
      await expect(page.getByRole("dialog").locator("img")).toHaveAttribute("src", await image.getAttribute("src"));
    }
  });
}

test("screenshots remain ordinary image links without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL + "/projects/platen/");
  const image = page.locator(".project-figure img");
  const source = await image.getAttribute("src");
  await image.click();
  expect(new URL(page.url()).pathname).toBe(source);
  await page.goBack();
  await expect(page.locator("h1")).toHaveText("Platen");
  await context.close();
});
