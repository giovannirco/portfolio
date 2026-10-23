import { createHash } from "node:crypto";
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pages, site } from "../src/content.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
const out = join(root, "dist");

// every language must have the same keys and the same shape
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
cpSync(join(src, "fonts", "OFL.txt"), join(out, "assets", "fonts", "OFL.txt"));

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

function head(p, { title = p.title, canonical = site.origin + p.path, alternates = true } = {}) {
  const alt = alternates
    ? langs.map((l) => `<link rel="alternate" hreflang="${l.lang}" href="${site.origin}${l.path}">`).join("\n") +
      `\n<link rel="alternate" hreflang="x-default" href="${site.origin}/">`
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

function langSwitch(p) {
  return `<nav class="lang" aria-label="${esc(p.switchLabel)}">` +
    langs.map((l) => `<a href="${l.path}" hreflang="${l.lang}" lang="${l.lang}" aria-current="${l === p}">${l.lang === "en" ? "EN" : "PT"}</a>`).join("") +
    `</nav>`;
}

function page(p) {
  const ids = Object.keys(p.screens);
  const h = p.hero;
  const leds = p.clusters.map((c) => `<li tabindex="0"><span class="led" aria-hidden="true"></span><span class="tip">${esc(c)}</span><span class="sr">${esc(c)}</span></li>`).join("");
  const rows = (list) => list.map(([k, v]) => `<li><span class="k">${esc(k)}</span><p>${esc(v)}</p></li>`).join("\n");
  const proj = p.projects.rows.map((r) => `<li><span class="k">${r.url ? ext(r.url, r.name) : ext(r.repo, r.name)}</span><div><p>${esc(r.text)}</p>` +
    `<p class="go">${r.url ? ext(r.url, p.projects.visit) : ""}${ext(r.repo, p.projects.source)}</p></div></li>`).join("\n");
  const spec = p.homelab.spec.map(([v, k]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  const principles = p.contact.principles.map(([b, t]) => `<li><strong>${esc(b)}</strong> ${esc(t)}</li>`).join("\n");
  const rail = ids.map((id) => `<li><a href="#${id}" aria-current="${id === ids[0]}"><span class="plate" aria-hidden="true"></span><span class="label">${esc(p.screens[id])}</span></a></li>`).join("");
  const L = p.contact.labels;

  return `${head(p)}
<body>
<a class="skip" href="#work">${esc(p.skip)}</a>
<nav class="rail" aria-label="${esc(p.nav)}"><ol>${rail}</ol></nav>
<main>
<section class="screen" id="top" aria-labelledby="top-h">
  <header class="top"><span class="brand">gc</span>${langSwitch(p)}</header>
  <div class="inner">
    <ul class="leds" aria-label="${esc(p.clustersLabel)}">${leds}</ul>
    <h1 id="top-h">${esc(h.name)}</h1>
    <p class="role">${esc(h.role)}</p>
    <p class="lede">${esc(h.lede)}</p>
    <ul class="links">
      <li>${ext(site.resume, h.links.resume)}</li>
      <li>${ext(site.github, h.links.github)}</li>
      <li>${ext(site.linkedin, h.links.linkedin)}</li>
      <li>${mail(h.links.email)}</li>
    </ul>
  </div>
  <a class="next" href="#work">${esc(p.next)}</a>
</section>

<section class="screen" id="work" aria-labelledby="work-h">
  <div class="inner">
    <h2 id="work-h">${esc(p.work.heading)}</h2>
    <p class="muted">${esc(p.work.intro)}</p>
    <ul class="ledger">
${rows(p.work.rows)}
    </ul>
  </div>
</section>

<section class="screen" id="homelab" aria-labelledby="homelab-h">
  <div class="inner">
    <h2 id="homelab-h">${esc(p.homelab.heading)}</h2>
    <p class="lede">${esc(p.homelab.lede)}</p>
    <dl class="spec">${spec}</dl>
    <p>${esc(p.homelab.body)}</p>
    <p class="links">${ext(site.orrery, p.homelab.orrery)} ${ext("https://github.com/giovannirco/agentic-homelab", p.homelab.handbook)}</p>
    <p class="asof">${esc(p.homelab.asof)}</p>
  </div>
</section>

<section class="screen" id="projects" aria-labelledby="projects-h">
  <div class="inner">
    <h2 id="projects-h">${esc(p.projects.heading)}</h2>
    <ul class="ledger">
${proj}
    </ul>
  </div>
</section>

<section class="screen" id="contact" aria-labelledby="contact-h">
  <div class="inner">
    <h2 id="contact-h">${esc(p.contact.heading)}</h2>
    <ul class="principles">
${principles}
    </ul>
    <h3>${esc(p.contact.reach)}</h3>
    <dl class="contact">
      <dt>${esc(L.email)}</dt><dd>${mail(site.email)}</dd>
      <dt>${esc(L.linkedin)}</dt><dd>${ext(site.linkedin, "in/giovanni-coutinho")}</dd>
      <dt>${esc(L.github)}</dt><dd>${ext(site.github, "giovannirco")}</dd>
      <dt>${esc(L.resume)}</dt><dd>${ext(site.resume, "resume.giovanni.dev.br")}</dd>
    </dl>
    <p class="foot">${esc(p.contact.where)} ${esc(p.contact.foot)}</p>
  </div>
</section>
</main>
<script src="${asset["site.js"]}" defer></script>
</body>
</html>
`;
}

function notFound() {
  const en = pages.en.notFound, pt = pages["pt-br"].notFound;
  return `${head(pages.en, { title: en.title, alternates: false })}
<body>
<main>
<section class="screen" aria-labelledby="nf-h">
  <div class="inner">
    <h1 id="nf-h">${esc(en.title)}</h1>
    <p class="lede">${esc(en.text)} <a href="/">${esc(en.home)}</a></p>
    <p class="muted" lang="pt-BR">${esc(pt.text)} <a href="/pt-br/">${esc(pt.home)}</a></p>
  </div>
</section>
</main>
</body>
</html>
`;
}

for (const p of langs) {
  mkdirSync(join(out, p.path), { recursive: true });
  writeFileSync(join(out, p.path, "index.html"), page(p).replace('<html lang', '<html class="snap" lang'));
}
writeFileSync(join(out, "404.html"), notFound());
writeFileSync(join(out, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
writeFileSync(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${langs.map((p) => `  <url><loc>${site.origin}${p.path}</loc>${langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l.lang}" href="${site.origin}${l.path}"/>`).join("")}</url>`).join("\n")}
</urlset>
`);
const en = pages.en;
writeFileSync(join(out, "llms.txt"), `# ${en.hero.name}

> ${en.hero.role}. ${en.hero.lede}

## ${en.work.heading}
${en.work.rows.map(([k, v]) => `- ${k}: ${v}`).join("\n")}

## ${en.homelab.heading}
${en.homelab.spec.map(([v, k]) => `- ${v} ${k}`).join("\n")}
- ${en.homelab.body}

## ${en.projects.heading}
${en.projects.rows.map((r) => `- [${r.name}](${r.url || r.repo}): ${r.text}`).join("\n")}

## Links
- [Resume](${site.resume})
- [GitHub](${site.github})
- [LinkedIn](${site.linkedin})
- [Orrery](${site.orrery})
- Portuguese: ${site.origin}/pt-br/
`);
console.log(`built ${langs.length} languages into dist/`);
