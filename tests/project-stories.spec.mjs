import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const path of ["/", "/pt-br/"]) {
  test(`${path} compact case results are visible on a phone before scrolling`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const id of ["observability", "delivery", "network", "ai"]) {
      await page.goto(path + "#" + id);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator(`#${id} .case-result`)).toBeInViewport({ ratio: 1 });
      await expect(page.locator(`#${id} .read-case`)).toBeInViewport();
    }
  });
  test(`${path} project story supports keyboard entry, language switch and chapter return`, async ({ page }) => {
    await page.goto(path + "#projects");
    const link = page.locator(`#projects a[href="${path}projects/job-scout/"]`).first();
    await link.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("h1")).toHaveText("Job Scout");
    const alternate = path === "/" ? "/pt-br/" : "/";
    await page.locator(`.lang a[href="${alternate}projects/job-scout/"]`).click();
    await expect(page).toHaveURL(new RegExp(alternate + "projects/job-scout/$"));
    await page.locator(".back-link").first().click();
    await expect(page).toHaveURL(new RegExp(alternate + "#projects$"));
    await expect(page.locator("#projects-h")).toBeInViewport();
  });
  test(`${path} product and open-source stories have accessible loaded evidence`, async ({ page }) => {
    for (const route of ["projects/platen/", "products/tessera/"]) {
      await page.goto(path + route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(violations.map((item) => item.id)).toEqual([]);
      for (const img of await page.locator("article img").all()) {
        await expect(img).toHaveAttribute("alt", /.+/);
        await img.scrollIntoViewIfNeeded();
        await expect.poll(() => img.evaluate((node) => node.complete && node.naturalWidth > 0)).toBe(true);
      }
    }
  });
}

test("product and project stories remain readable without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const [group, id] of [["products", "tessera"], ["projects", "platen"]]) {
    await page.goto(`${baseURL}/#${group}`);
    await page.locator(`a[href="/${group}/${id}/"]`).first().click();
    await expect(page.locator(".story-summary")).not.toBeEmpty();
    await expect(page.locator(".story section")).not.toHaveCount(0);
  }
  await context.close();
});

test("phone case labels do not break within a word", async ({ page }) => {
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 844 });
    for (const path of ["/", "/pt-br/"]) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const label = page.locator('[data-case-link="observability"] span:last-child');
      expect(await label.evaluate((node) => {
        const range = document.createRange();
        range.selectNodeContents(node);
        return range.getClientRects().length;
      })).toBe(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  }
});
