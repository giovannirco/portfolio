# portfolio

Source of [giovanni.dev.br](https://giovanni.dev.br): a horizontal case reel, four case studies, public projects and products, in English and Portuguese. Plain HTML and CSS, with JavaScript for reel navigation. Swipe, arrow buttons and keyboard controls select cases; vertical scrolling remains native. Reduced motion and browsing without JavaScript are supported.

## Build and run

```sh
node scripts/build.mjs          # writes dist/
docker build -t portfolio .
docker run --read-only --tmpfs /tmp -p 8080:8080 portfolio
```

The image is nginx running as an unprivileged user with a read-only root filesystem. `/healthz` answers `ok`.

## Checks

```sh
npm ci
npm run check                   # build, content checks, HTML validation
npx playwright test             # against a running container on :8088 (BASE_URL to change it)
```

All copy lives in `src/content.mjs`; the build stops if the two languages don't have the same keys.

The build emits two landing pages and eight case pages under `/work/` and `/pt-br/work/`. Fonts and assets are self-hosted. Case content describes engineering decisions without private artifacts or unverified metrics; employer context stays in the experience section. `PRODUCT.md` records content constraints and `DESIGN.md` records the visual system.

## Licence

Code under the MIT licence. IBM Plex and Wix Madefor Display are under the SIL Open Font License (`src/fonts/OFL.txt` and `src/fonts/Wix-OFL.txt`).
