# portfolio

Source of [giovanni.dev.br](https://giovanni.dev.br): five screens, English and Portuguese, plain HTML and CSS with a few lines of JavaScript for the screen indicator.

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

## Licence

Code under the MIT licence. IBM Plex is under the SIL Open Font License (`src/fonts/OFL.txt`).
