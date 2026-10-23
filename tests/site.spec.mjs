import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const path of ["/", "/pt-br/"]) {
  test(`${path} passes axe`, async ({ page }) => {
    await page.goto(path);
    const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(violations.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
  });

  test(`${path} every screen fits the viewport`, async ({ page }) => {
    await page.goto(path);
    const over = await page.$$eval(".screen", (s) => s.map((x) => [x.id, x.scrollHeight - innerHeight]).filter(([, d]) => d > 1));
    expect(over).toEqual([]);
  });

  test(`${path} hash and indicator follow the screen`, async ({ page }) => {
    await page.goto(path);
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await page.evaluate(() => document.getElementById("projects").scrollIntoView({ behavior: "instant" }));
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator('.rail a[href="#projects"]')).toHaveAttribute("aria-current", "true");
  });

  test(`${path} loads nothing from other origins and logs no errors`, async ({ page, baseURL }) => {
    const errors = [], foreign = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("request", (r) => !r.url().startsWith(baseURL) && !r.url().startsWith("data:") && foreign.push(r.url()));
    await page.goto(path, { waitUntil: "networkidle" });
    expect(errors).toEqual([]);
    expect(foreign).toEqual([]);
  });
}

test("deep link lands on its screen", async ({ page }) => {
  await page.goto("/#homelab");
  await expect(page.locator('.rail a[href="#homelab"]')).toHaveAttribute("aria-current", "true");
});

test("unknown path is a 404 page", async ({ page }) => {
  const r = await page.goto("/nope");
  expect(r.status()).toBe(404);
  await expect(page.locator("h1")).toHaveText("Page not found");
});

test("health endpoint answers and /metrics does not", async ({ request }) => {
  expect((await request.get("/healthz")).status()).toBe(200);
  expect((await request.get("/metrics")).status()).toBe(404);
});
