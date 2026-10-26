import { createHash } from "node:crypto";
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pages, site } from "../src/content.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
const out = join(root, "dist");

function shape(value, path = "") {
  if (Array.isArray(value)) return value.flatMap((v, i) => shape(v, `${path}[${i}]`));
  if (value && typeof value === "object") return Object.entries(value).flatMap(([k, v]) => shape(v, path ? `${path}.${k}` : k));
  return [path];
}
const [first, ...rest] = Object.values(pages).map((p) => shape(p).sort().join("\n"));
if (rest.some((r) => r !== first)) {
  console.error("content.mjs: the languages differ in keys or list lengths");
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, "assets", "fonts"), { recursive: true });

const hash = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 10);
const asset = {};
for (const f of readdirSync(join(src, "fonts")).filter((f) => f.endsWith(".woff2"))) {
  const buf = readFileSync(join(src, "fonts", f));
  const name = f.replace(".woff2", `.${hash(buf)}.woff2`);
  writeFileSync(join(out, "assets", "fonts", name), buf);
  asset[`/assets/fonts/${f}`] = `/assets/fonts/${name}`;
}
for (const file of readdirSync(join(src, "fonts")).filter((file) => file.endsWith(".txt"))) {
  cpSync(join(src, "fonts", file), join(out, "assets", "fonts", file));
}

let css = readFileSync(join(src, "assets", "site.css"), "utf8");
for (const [from, to] of Object.entries(asset)) css = css.replaceAll(from, to);
for (const f of ["site.css", "site.js"]) {
  const body = f === "site.css" ? css : readFileSync(join(src, "assets", f), "utf8");
  const name = f.replace(".", `.${hash(body)}.`);
  writeFileSync(join(out, "assets", name), body);
  asset[f] = `/assets/${name}`;
}
for (const f of ["favicon.svg", "og.png"]) {
  const buf = readFileSync(join(src, "assets", f));
  writeFileSync(join(out, f), buf);
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const ext = (href, text) => `<a href="${esc(href)}" rel="noopener">${esc(text)}</a>`;
const mail = (text) => `<!--email_off--><a href="mailto:${site.email}">${esc(text)}</a><!--/email_off-->`;
const langs = Object.values(pages);

function head(p, { title = p.title, canonical = site.origin + p.path, alternates = true, route = "" } = {}) {
  const alt = alternates
    ? langs.map((l) => `<link rel="alternate" hreflang="${l.lang}" href="${site.origin}${l.path}${route}">`).join("\n") +
      `\n<link rel="alternate" hreflang="x-default" href="${site.origin}/${route}">`
    : "";
  return `<!DOCTYPE html>
<html lang="${p.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${canonical}">
${alt}
<meta name="theme-color" content="#14130f">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.origin}/og.png">
<meta property="og:locale" content="${p.lang.replace("-", "_")}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="${asset["/assets/fonts/plex-sans-400.woff2"]}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${asset["/assets/fonts/plex-sans-600.woff2"]}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${asset["site.css"]}">
</head>`;
}


const arrow = (direction = "right") => `<svg class="arrow ${direction}" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>`;

function renderHeader(page, story = null) {
  const identity = story
    ? `<a class="identity-name" href="${page.path}">${esc(page.hero.name)}</a>`
    : `<h1 class="identity-name">${esc(page.hero.name)}</h1>`;
  const nav = Object.entries(page.screens).map(([id, label]) =>
    `<a href="${story ? page.path : ""}#${id === "work" ? "observability" : id}" data-section="${id}">${esc(label)}</a>`).join("");
  const language = langs.map((language) =>
    `<a href="${language.path}${story ? "work/" + story.id + "/" : ""}" hreflang="${language.lang}" lang="${language.lang}" aria-current="${language === page}">${language.lang === "en" ? "EN" : "PT-BR"}</a>`).join('<span aria-hidden="true"> / </span>');
  return `<header class="site-header"><div class="identity">${identity}<p>${esc(page.hero.role)}</p></div>
<div class="header-links"><div class="utilities">${ext(site.resume, page.hero.links.resume)}<a href="${story ? page.path : ""}#about">${esc(page.reel.contact)}</a><nav class="lang" aria-label="${esc(page.switchLabel)}">${language}</nav></div>
<nav class="primary-nav" aria-label="${esc(page.nav)}">${nav}</nav></div></header>`;
}

function renderDiagram(story) {
  const [a, b, c, d, e] = story.diagram.labels.map(esc);
  const diagrams = {
    observability: `<div class="collection"><svg viewBox="0 0 100 48" aria-hidden="true"><path d="M0 8h26l16 16h58M0 24h100M0 40h26l16-16"/></svg><strong>${a}</strong></div><div class="destinations"><div><span>${b}</span><strong>${c}</strong></div><div><span>${d}</span><strong>${e}</strong></div></div>`,
    delivery: `<div class="delivery-owner"><strong>${a}</strong><svg viewBox="0 0 100 38" aria-hidden="true"><path d="M0 8h25l15 11h60M0 30h25l15-11"/></svg></div><div class="release-sheet"><span>${b}</span><div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg><strong>${c}</strong></div><div class="release-target"><span>${d}</span><strong>${e}</strong></div></div>`,
    network: `<div class="policy-boundary"><strong>${a}</strong></div><div class="traffic-lanes"><div class="allowed-lane"><span>${b}</span><svg viewBox="0 0 160 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0 12h156m-8-6 8 6-8 6"/></svg><strong>${c}</strong></div><div class="blocked-lane"><span>${d}</span><svg viewBox="0 0 160 24" preserveAspectRatio="none" aria-hidden="true"><path d="M0 12h76m0-10v20"/></svg></div></div><div class="enforcement">${e}</div>`,
    ai: `<div class="question"><strong>${a}</strong><div class="tool-sources"><span>${b}</span><span>${c}</span></div></div><div class="evidence-sheet"><span>${d}</span><svg viewBox="0 0 160 36" aria-hidden="true"><path d="M0 4h115M0 18h160M0 32h82"/></svg><strong>${e}</strong></div>`,
  };
  if (!diagrams[story.id]) throw new Error(`Unknown case diagram: ${story.id}`);
  return `<figure class="case-diagram" data-diagram="${story.id}"><div class="diagram-art">${diagrams[story.id]}</div><figcaption>${esc(story.diagram.caption)}</figcaption></figure>`;
}

function renderReel(page) {
  const cards = page.cases.map((story) => `<article class="case-card" id="${story.id}" aria-labelledby="${story.id}-h">
<h2 id="${story.id}-h">${esc(story.title)}</h2>
<p class="case-summary">${esc(story.summary)}</p>
${renderDiagram(story)}
<a class="read-case" href="${page.path}work/${story.id}/">${esc(page.reel.read)} ${arrow()}</a></article>`).join("");
  const caseLinks = page.cases.map((story, index) =>
    `<a href="#${story.id}" data-case-link="${story.id}"><span class="case-position" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span><span>${esc(story.label)}</span></a>`).join("");
  return `<section class="reel-section" id="work" aria-label="${esc(page.work.heading)}">
<section class="reel" tabindex="0" aria-label="${esc(page.reel.label)}" aria-describedby="reel-hint">
<article class="case-card intro-card" id="top" aria-labelledby="intro-h">
<h2 id="intro-h">${esc(page.hero.heading)}</h2><p class="case-summary">${esc(page.hero.lede)}</p>
<div class="intro-links">${ext(site.github, "GitHub")}${ext(site.resume, page.hero.links.resume)}</div>
<a class="read-case" href="#observability">${esc(page.work.heading)} ${arrow()}</a></article>
${cards}</section>
<div class="reel-controls"><button type="button" data-reel-prev aria-label="${esc(page.reel.previous)}">${arrow("left")}</button>
<nav class="case-index" aria-label="${esc(page.reel.caseNav)}">${caseLinks}</nav>
<button type="button" data-reel-next aria-label="${esc(page.reel.next)}">${arrow()}</button></div>
<p class="reel-hint" id="reel-hint">${esc(page.reel.hint)}</p>
<p class="reel-exit"><a href="#projects">${esc(page.projects.heading)} ${arrow("down")}</a></p>
</section>`;
}


function renderSections(page) {
  const projects = page.projects.rows.map((project) => `<li><h3>${ext(project.repo, project.name)}</h3><div><p>${esc(project.text)}</p><p class="project-links">${ext(project.repo, page.projects.source)}${project.url ? ext(project.url, page.projects.visit) : ""}</p></div></li>`).join("");
  const products = page.products.rows.map((product) => `<li><h3>${product.url ? ext(product.url, product.name) : esc(product.name)}</h3><p>${esc(product.text)}</p></li>`).join("");
  const contributions = page.projects.contributions.map((item) => `<li>${ext(item.url, item.name + ": " + item.text)}</li>`).join("");
  const specs = page.homelab.spec.map(([value, label]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join("");
  return `<section class="content-section" id="projects" aria-labelledby="projects-h"><h2 id="projects-h">${esc(page.projects.heading)}</h2>
<ul class="work-list">${projects}</ul><div class="upstream"><h3>${esc(page.projects.upstream)}</h3><ul>${contributions}</ul></div></section>
<section class="content-section" id="products" aria-labelledby="products-h"><h2 id="products-h">${esc(page.products.heading)}</h2><ul class="work-list">${products}</ul></section>
<section class="content-section" id="homelab" aria-labelledby="homelab-h"><h2 id="homelab-h">${esc(page.homelab.heading)}</h2><p class="section-intro">${esc(page.homelab.lede)}</p>
<dl class="lab-spec">${specs}</dl><p class="asof">${esc(page.homelab.asof)}</p><p>${esc(page.homelab.body)}</p>
<p class="project-links">${ext(site.orrery, page.homelab.orrery)}${ext("https://github.com/giovannirco/agentic-homelab", page.homelab.handbook)}</p></section>
<section class="content-section about" id="about" aria-labelledby="about-h"><h2 id="about-h">${esc(page.about.heading)}</h2>
<ul class="principles">${page.contact.principles.map(([title, body]) => `<li><h3>${esc(title)}</h3><p>${esc(body)}</p></li>`).join("")}</ul>
<div class="experience"><h3>${esc(page.about.experience)}</h3><p>${esc(page.about.history)}</p></div>
<footer><h3>${esc(page.contact.reach)}</h3><p class="project-links">${mail(page.hero.links.email)}${ext(site.linkedin, "LinkedIn")}${ext(site.github, "GitHub")}${ext(site.resume, page.hero.links.resume)}</p><p class="asof">${esc(page.contact.where)} ${esc(page.contact.foot)}</p></footer></section>`;
}

function renderStory(page, story) {
  const route = "work/" + story.id + "/";
  const related = story.id === "ai" ? page.projects.rows.slice(0, 3) : [page.projects.rows[2], page.projects.rows[4]];
  return `${head({ ...page, description: story.summary }, { title: story.title + " · " + page.hero.name, canonical: site.origin + page.path + route, route })}
<body class="story-page"><a class="skip" href="#story">${esc(page.skip)}</a>${renderHeader(page, story)}
<main class="story" id="story"><a class="back-link" href="${page.path}#${story.id}">${arrow("left")} ${esc(page.reel.back)}</a>
<article><h1>${esc(story.title)}</h1><p class="story-summary">${esc(story.summary)}</p>${renderDiagram(story)}
${story.sections.map(([title, body]) => `<section><h2>${esc(title)}</h2><p>${esc(body)}</p></section>`).join("")}</article>
<aside class="related"><h2>${esc(page.reel.related)}</h2><ul>${related.map((project) => `<li>${ext(project.repo, project.name)}<p>${esc(project.text)}</p></li>`).join("")}</ul></aside>
<a class="back-link" href="${page.path}#${story.id}">${arrow("left")} ${esc(page.reel.back)}</a></main></body></html>`;
}

function page(page) {
  return `${head(page)}<body class="chapter-page"><a class="skip" href="#work">${esc(page.skip)}</a>
<main><section class="case-chapter" aria-label="${esc(page.hero.name)}">${renderHeader(page)}${renderReel(page)}</section>${renderSections(page)}</main>
<script src="${asset["site.js"]}" defer></script></body></html>`;
}

function notFound() {
  const en = pages.en.notFound, pt = pages["pt-br"].notFound;
  return `${head(pages.en, { title: en.title, alternates: false })}<body><main class="reading"><h1>${esc(en.title)}</h1>
<p>${esc(en.text)} <a href="/">${esc(en.home)}</a></p><p lang="pt-BR">${esc(pt.text)} <a href="/pt-br/">${esc(pt.home)}</a></p></main></body></html>`;
}


const routes = [];
for (const entry of langs) {
  mkdirSync(join(out, entry.path), { recursive: true });
  writeFileSync(join(out, entry.path, "index.html"), page(entry));
  routes.push({ entry, suffix: "" });
  for (const story of entry.cases) {
    const suffix = "work/" + story.id + "/";
    mkdirSync(join(out, entry.path, suffix), { recursive: true });
    writeFileSync(join(out, entry.path, suffix, "index.html"), renderStory(entry, story));
    routes.push({ entry, suffix });
  }
}
writeFileSync(join(out, "404.html"), notFound());
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
writeFileSync(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(({ entry, suffix }) => `<url><loc>${site.origin}${entry.path}${suffix}</loc>${langs.map((language) => `<xhtml:link rel="alternate" hreflang="${language.lang}" href="${site.origin}${language.path}${suffix}"/>`).join("")}</url>`).join("\n")}
</urlset>`);
const english = pages.en;
writeFileSync(join(out, "llms.txt"), `# ${english.hero.name}\n\n${english.hero.role}. ${english.hero.lede}\n
## Cases\n${english.cases.map((story) => `- [${story.title}](${site.origin}/work/${story.id}/): ${story.summary}`).join("\n")}
## Public work\n${english.projects.rows.map((project) => `- [${project.name}](${project.repo}): ${project.text}`).join("\n")}
## Products\n${english.products.rows.map((product) => `- ${product.name}: ${product.text}`).join("\n")}
## Experience\n${english.about.history}
## Links\n- [Resume](${site.resume})\n- [GitHub](${site.github})\n- [LinkedIn](${site.linkedin})\n`);
console.log(`built ${langs.length} languages and ${routes.length} routes into dist/`);
