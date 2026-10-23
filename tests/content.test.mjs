import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { pages, site } from "../src/content.mjs";

const read = (p) => readFileSync(new URL(`../dist/${p}`, import.meta.url), "utf8");
const all = JSON.stringify(pages);

for (const p of Object.values(pages)) {
  const html = read(p.path.replace(/^\//, "") + "index.html");
  assert.match(html, new RegExp(`<html class="snap" lang="${p.lang}">`), `${p.lang}: lang`);
  for (const l of Object.values(pages)) assert.ok(html.includes(`hreflang="${l.lang}" href="${site.origin}${l.path}"`), `${p.lang}: hreflang ${l.lang}`);
  assert.equal((html.match(/<section class="screen" id="/g) || []).length, 5, `${p.lang}: five screens`);
  assert.ok(!/(src|href)="\/\/|<script(?! src="\/assets\/)/.test(html), `${p.lang}: only local scripts`);
  assert.ok(!/style="/.test(html), `${p.lang}: no inline styles (CSP)`);
  assert.ok(html.includes("<!--email_off-->"), `${p.lang}: email wrapped for the CDN`);
  for (const m of html.matchAll(/<a href="(https?:[^"]+)"([^>]*)>/g)) assert.match(m[2], /rel="noopener"/, `${p.lang}: rel on ${m[1]}`);
}

assert.ok(!/—/.test(all), "no em dashes in copy");
assert.ok(!/observe-community-mcp|golden path|review-gated|deep knowledge/i.test(all), "banned phrases");
for (const f of ["404.html", "robots.txt", "sitemap.xml", "llms.txt", "favicon.svg", "og.png", "assets/fonts/OFL.txt"]) assert.ok(existsSync(new URL(`../dist/${f}`, import.meta.url)), f);

const nginx = readFileSync(new URL("../deploy/headers.conf", import.meta.url), "utf8");
assert.match(nginx, /default-src 'none'; script-src 'self'; style-src 'self'/, "strict CSP");
const conf = readFileSync(new URL("../deploy/nginx.conf", import.meta.url), "utf8");
assert.match(conf, /location = \/metrics \{ return 404; \}/, "no /metrics");
assert.match(conf, /location = \/healthz/, "health endpoint");
console.log("content checks passed");
