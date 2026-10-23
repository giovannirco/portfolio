// Renders src/assets/og.png (1200×630). Needs Playwright: npx playwright install chromium
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
const font = (f) => readFileSync(new URL(`../src/fonts/${f}`, import.meta.url)).toString("base64");
const html = `<!doctype html><html><head><style>
@font-face{font-family:S;src:url(data:font/woff2;base64,${font("plex-sans-600.woff2")})}
@font-face{font-family:R;src:url(data:font/woff2;base64,${font("plex-sans-400.woff2")})}
@font-face{font-family:M;src:url(data:font/woff2;base64,${font("plex-mono-400.woff2")})}
body{margin:0;width:1200px;height:630px;background:#14130f;color:#ece6d8;font-family:R;display:flex;flex-direction:column;justify-content:center;padding:0 96px;box-sizing:border-box}
.l{display:flex;gap:22px;margin-bottom:56px}.l i{width:22px;height:22px;border-radius:50%;background:#e8a33d;box-shadow:0 0 18px 2px rgba(232,163,61,.5)}
h1{font-family:S;font-size:96px;letter-spacing:-3px;margin:0}p{font-size:40px;color:#a49d8d;margin:16px 0 0}
.u{position:absolute;bottom:64px;left:96px;right:96px;border-top:2px solid #6b4c1f;padding-top:22px;font-family:M;font-size:26px;color:#a49d8d}
</style></head><body><div class="l"><i></i><i></i><i></i><i></i><i></i><i></i></div>
<h1>Giovanni Coutinho</h1><p>Staff Platform Engineer</p><div class="u">giovanni.dev.br</div></body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(html); await p.waitForTimeout(300);
await p.screenshot({ path: new URL("../src/assets/og.png", import.meta.url).pathname });
await b.close();
