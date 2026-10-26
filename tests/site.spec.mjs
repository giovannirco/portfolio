import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const path of ["/", "/pt-br/"]) {
  test(`${path} controls and case reading navigation`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    await expect(page.locator('[data-case-link="observability"]')).toHaveAttribute("aria-current", "true");
    await page.locator("[data-reel-next]").click();
    await expect(page.locator('[data-case-link="delivery"]')).toHaveAttribute("aria-current", "true");
    await page.locator("#delivery .read-case").click();
    await expect(page).toHaveURL(new RegExp(path + "work/delivery/$"));
    await page.locator(".back-link").first().click();
    await expect(page.locator('[data-case-link="delivery"]')).toHaveAttribute("aria-current", "true");
  });
  test(`${path} keyboard, direct links and edge controls`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path + "#network");
    await expect(page.locator('[data-case-link="network"]')).toHaveAttribute("aria-current", "true");
    await page.locator(".reel").focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.locator('[data-case-link="ai"]')).toHaveAttribute("aria-current", "true");
    await expect(page.locator("[data-reel-next]")).toBeDisabled();
    await page.keyboard.press("Home");
    await expect(page).toHaveURL(/#top$/);
    await expect(page.locator("[data-reel-prev]")).toBeDisabled();
    await page.keyboard.press("End");
    await expect(page).toHaveURL(/#ai$/);
  });
  test(`${path} scrolling updates the active marker`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    await page.locator("#network").evaluate((card) => {
      const reel = card.parentElement;
      reel.scrollLeft = card.offsetLeft - (reel.clientWidth - card.offsetWidth) / 2;
    });
    await expect(page.locator('[data-case-link="network"]')).toHaveAttribute("aria-current", "true");
  });
  test(`${path} sections and browser history`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    await page.locator('.primary-nav a[href="#products"]').click();
    await expect(page.locator("#products")).toBeInViewport();
    await page.goBack();
    await expect(page.locator(".reel")).toBeInViewport();
  });
  test(`${path} no document overflow or foreign requests`, async ({ page, baseURL }) => {
    const errors = [], foreign = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => message.type() === "error" && errors.push(message.text()));
    page.on("request", (request) => {
      if (!request.url().startsWith(baseURL) && !request.url().startsWith("data:")) foreign.push(request.url());
    });
    await page.goto(path, { waitUntil: "networkidle" });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(errors).toEqual([]);
    expect(foreign).toEqual([]);
  });
  test(`${path} axe on reel and reading page`, async ({ page }) => {
    for (const route of [path, path + "work/observability/"]) {
      await page.goto(route);
      const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(violations.map((item) => item.id)).toEqual([]);
    }
  });
  test(`${path} cases explain distinct decisions without travelling particles`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    await expect(page.locator(".flow")).toHaveCount(0);
    for (const id of ["observability", "delivery", "network", "ai"]) {
      const diagram = page.locator(`#${id} figure`);
      await expect(diagram).toHaveAttribute("data-diagram", id);
      await expect(diagram.locator("figcaption")).not.toBeEmpty();
      expect(await diagram.evaluate((node) => node.getAnimations({ subtree: true }).length)).toBe(0);
      expect(await diagram.evaluate((node) => node.scrollWidth <= node.clientWidth)).toBe(true);
    }
    await expect(page.locator("#observability figure")).toContainText("Grafana Cloud");
    await expect(page.locator("#network figure")).toContainText("Hubble");
  });
}
test("vertical chapters settle independently of horizontal cases", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 960 });
  await page.goto("/#products");
  await page.evaluate(() => document.fonts.ready);
  await expect.poll(() => page.locator("#products").evaluate((node) => Math.abs(node.getBoundingClientRect().top))).toBeLessThan(2);
  await page.mouse.move(1100, 500);
  await page.mouse.wheel(0, 500);
  await expect.poll(() => page.locator("#homelab").evaluate((node) => Math.abs(node.getBoundingClientRect().top))).toBeLessThan(2);
  await page.mouse.wheel(0, -500);
  await expect.poll(() => page.locator("#products").evaluate((node) => Math.abs(node.getBoundingClientRect().top))).toBeLessThan(2);
  await expect(page.locator('[data-case-link="observability"]')).toHaveAttribute("aria-current", "true");
});
test("long phone chapters keep their last links reachable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/pt-br/#projects");
  const last = page.locator("#projects .upstream a").last();
  await last.focus();
  await expect(last).toBeInViewport();
  await page.locator("#about footer a").last().focus();
  await expect(page.locator("#about footer a").last()).toBeInViewport();
});
test("phone scrolling can reach the reel controls before leaving the case chapter", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const path of ["/", "/pt-br/"]) {
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    await page.mouse.move(380, 450);
    for (const [delta, target] of [[350, ".reel-hint"], [900, "#projects-h"], [-500, ".reel-hint"]]) {
      await page.mouse.wheel(0, delta);
      let previous = -1;
      let settled = 0;
      await expect.poll(async () => {
        const position = await page.evaluate(() => scrollY);
        settled = Math.abs(position - previous) < 1 ? settled + 1 : 0;
        previous = position;
        return settled;
      }, { intervals: [150] }).toBeGreaterThanOrEqual(3);
      await expect(page.locator(target)).toBeInViewport();
    }
    await expect(page.locator(".reel-controls")).toBeInViewport();
  }
});
test("cases are reachable without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL);
  await page.locator('[data-case-link="ai"]').click();
  await page.locator("#ai .read-case").click();
  await expect(page.locator("h1")).toContainText("investigation");
  await context.close();
});
test("large text fits without document overflow", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.documentElement.style.fontSize = "200%");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(await page.locator("#observability").evaluate((node) => node.scrollHeight <= node.clientHeight + 1)).toBe(true);
});
test("vertical wheel is not trapped", async ({ page }) => {
  await page.goto("/");
  await page.locator(".reel").hover();
  await page.mouse.wheel(0, 800);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(100);
});
test("desktop reel keeps its exit within the first viewport", async ({ page }) => {
  for (const [width, height] of [[1440, 960], [1280, 900]]) {
    await page.setViewportSize({ width, height });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(await page.locator(".reel-exit").evaluate((node) => node.getBoundingClientRect().bottom)).toBeLessThanOrEqual(height);
  }
});
test("404 and deployment endpoints", async ({ page, request }) => {
  expect((await page.goto("/nope")).status()).toBe(404);
  await expect(page.locator("h1")).toHaveText("Page not found");
  expect((await request.get("/healthz")).status()).toBe(200);
  expect((await request.get("/metrics")).status()).toBe(404);
});
