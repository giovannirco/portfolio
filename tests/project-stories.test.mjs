import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../dist/${path}`, import.meta.url), "utf8");
const inventory = {
  projects: ["job-scout", "platen", "cpa-prometheus", "interview-skills", "orrery", "peephole", "jev-playground", "latchkey", "heatbar"],
  products: ["plano-adentro", "subsindico", "tessera", "navalha", "seguros-mcp"],
};

for (const prefix of ["", "pt-br/"]) {
  test(`${prefix || "en"} homepage features the selected projects and promotes Plano Adentro`, () => {
    const home = read(prefix + "index.html");
    const projects = home.split('id="projects"')[1].split('id="products"')[0];
    const products = home.split('id="products"')[1].split('id="homelab"')[0];
    const featuredNames = (section) => [...section.matchAll(/<article class="featured-project">[\s\S]*?<h3>([^<]+)<\/h3>/g)].map((match) => match[1]);
    assert.deepEqual(featuredNames(projects), ["Job Scout", "Platen", "Latchkey"]);
    assert.deepEqual(featuredNames(products), ["Subsíndico", "Plano Adentro"]);
    assert.match(projects.split("</article>")[0], /<img src="\/assets\/projects\/job-scout[^" ]+\.png"/);
    assert.match(products.split('class="work-list project-directory"')[1], /Tessera/);
    assert.ok(!/<strong>[^<]+:<\/strong>\s*<\/p>/.test(products));
  });
  test(`${prefix || "en"} opening shows compact proof and keeps full case comparisons on reading pages`, () => {
    const home = read(prefix + "index.html");
    assert.equal((home.match(/class="case-proof"/g) || []).length, 4);
    assert.ok(!home.includes('class="case-comparison"'));
    for (const id of ["observability", "delivery", "network", "ai"]) {
      const detail = read(`${prefix}work/${id}/index.html`);
      assert.ok(detail.includes('class="case-comparison"'));
      assert.ok(detail.includes('class="case-scope"'));
    }
  });
  for (const [group, ids] of Object.entries(inventory)) {
    test(`${prefix || "en"} ${group} have discoverable static stories and equivalent language routes`, () => {
      const home = read(prefix + "index.html");
      for (const id of ids) {
        const route = `${group}/${id}/`;
        assert.ok(home.includes(`href="/${prefix}${route}"`), `${route} linked from home`);
        assert.ok(existsSync(new URL(`../dist/${prefix}${route}index.html`, import.meta.url)), route);
        const detail = read(prefix + route + "index.html");
        assert.match(detail, /<h1>[^<]+<\/h1>/);
        assert.ok(detail.includes(`href="/${prefix}#${group}"`));
        assert.ok(detail.includes(`href="/${prefix ? "" : "pt-br/"}${route}"`));
        assert.ok(read("sitemap.xml").includes(`https://giovanni.dev.br/${prefix}${route}`));
        assert.ok(!/observe-community-mcp|zero.knowledge|customer count|sole author/i.test(detail));
      }
    });
  }
  test(`${prefix || "en"} project evidence includes bounded attribution and product status`, () => {
    assert.match(read(prefix + "projects/latchkey/index.html"), /kind3r\/ttlock-sdk-js/);
    assert.match(read(prefix + "projects/jev-playground/index.html"), /TypeSafe/);
    assert.match(read(prefix + "products/navalha/index.html"), prefix ? /Em testes/ : /In testing/);
    assert.match(read(prefix + "products/seguros-mcp/index.html"), /Tokio Marine.*beta/);
    assert.ok(!read(prefix + "products/navalha/index.html").includes('href="https://navalha'));
  });
}
