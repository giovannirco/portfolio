import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { pages, site } from "../src/content.mjs";
const read = (path) => readFileSync(new URL(`../dist/${path}`, import.meta.url), "utf8");
for (const page of Object.values(pages)) {
  const html = read(page.path.slice(1) + "index.html");
  assert.match(html, /class="reel"/, "navigable case reel");
  assert.match(html, new RegExp(`<html lang="${page.lang}">`));
  assert.equal(page.cases.length, 4);
  assert.ok(!/Exodus/i.test(page.hero.lede), "employer history stays separate");
  for (const story of page.cases) {
    assert.ok(!/Exodus/i.test(JSON.stringify(story)));
    const route = `${page.path}work/${story.id}/`;
    assert.ok(html.includes(`href="${route}"`));
    const detail = read(route.slice(1) + "index.html");
    assert.ok(detail.includes(story.title));
    assert.ok(detail.includes(`href="${page.path}#${story.id}"`));
    assert.ok(read("sitemap.xml").includes(site.origin + route));
  }
  for (const name of ["Job Scout", "Platen", "CPA Prometheus", "Interview skills", "Orrery", "Peephole"]) {
    assert.ok(page.projects.rows.some((project) => project.name === name), name);
  }
  assert.equal(page.products.rows.length, 5);
  assert.equal(page.products.rows.find((product) => product.name === "Navalha").url, "");
  assert.ok(!/(src|href)="\/\/|<script(?! src="\/assets\/)/.test(html));
  assert.ok(!/style="/.test(html));
  assert.ok(html.includes("<!--email_off-->"));
  for (const match of html.matchAll(/<a[^>]+href="(https?:[^"]+)"([^>]*)>/g)) assert.match(match[2], /rel="noopener"/);
}
const all = JSON.stringify(pages);
assert.ok(!/—/.test(all));
assert.ok(!/observe-community-mcp|golden path|review-gated|deep knowledge/i.test(all));
for (const file of ["404.html", "robots.txt", "sitemap.xml", "llms.txt", "favicon.svg", "og.png", "assets/fonts/OFL.txt"]) {
  assert.ok(existsSync(new URL(`../dist/${file}`, import.meta.url)), file);
}
const headers = readFileSync(new URL("../deploy/headers.conf", import.meta.url), "utf8");
assert.match(headers, /default-src 'none'; script-src 'self'; style-src 'self'/);
console.log("content checks passed: bilingual cases, public work, products and static delivery");
