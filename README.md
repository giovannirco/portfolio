# portfolio

Source of [giovanni.dev.br](https://giovanni.dev.br): a horizontal reel of four Staff case studies, followed by substantial open-source and product chapters, in English and Portuguese. Plain HTML and CSS, with JavaScript for reel navigation. Swipe, arrow buttons and keyboard controls select cases. Each opening case shows a compact decision, result and scope; its standalone page retains the full Before / My decision / After comparison. Native vertical chapters grow to fit longer content. Reduced motion and browsing without JavaScript are supported.

Featured projects combine purpose, contribution, engineering decisions and status with verified public screenshots or labeled workflow diagrams. Every project and product also has a static reading page. Image sources and licenses are recorded in `src/assets/projects/README.md`; no private employer material is included.

Public work features Job Scout, Platen and Latchkey; the remaining projects use compact list entries. Products feature Subsíndico and Plano Adentro, with Tessera in the list below.

## Build and run

Use Node 24.22.3 to match CI and the image build.

```sh
node scripts/build.mjs          # writes dist/
docker build -t portfolio .
docker run --read-only --tmpfs /tmp -p 127.0.0.1:8088:8080 portfolio
```

The image is nginx running as an unprivileged user with a read-only root filesystem. `/healthz` answers `ok`.

## Checks

```sh
npm ci
npm run check                   # build, content checks, HTML validation
npx playwright install chromium
npm run e2e                     # against the running container on :8088 (BASE_URL to change it)
```

All copy lives in `src/content.mjs`; the build stops if the two languages don't have the same keys.

The build emits 38 routes: two landing pages, eight case pages, eighteen open-source stories and ten product stories. Cases keep `/work/` and `/pt-br/work/`; new stories use `/projects/`, `/products/` and their `/pt-br/` equivalents. Canonical URLs, language links and the sitemap cover every story. Fonts and fingerprinted PNG assets are self-hosted. Case content describes engineering decisions without private artifacts or unverified metrics; employer context stays in the experience section. `PRODUCT.md` records content constraints and `DESIGN.md` records the visual system.

## Licence

Code under the MIT licence. IBM Plex and Wix Madefor Display are under the SIL Open Font License (`src/fonts/OFL.txt` and `src/fonts/Wix-OFL.txt`).
