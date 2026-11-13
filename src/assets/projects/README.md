# Project screenshots

These are screenshots of the actual projects, not generated product mockups. Captions distinguish public documentation, synthetic demos and a live public-site capture.

| Asset | Source and status | Dimensions |
|---|---|---|
| `job-scout-pipeline-demo.png` | Actual [Job Scout pipeline](https://github.com/giovannirco/job-scout/blob/06104250398510fe01ca05607024fc4781c94720/apps/web/src/pages/Pipeline.tsx), captured locally on 2026-11-13 UTC from v2.14.6 with eight fictional positions. Fresh database, workers disabled, no AI calls or production data. Copied unchanged from the capture. | 1440 × 760 |
| `latchkey-dashboard-demo.png` | Actual [Latchkey web UI](https://github.com/giovannirco/latchkey/tree/37fc8b33520976b578d3855f012b322bd77a6718/web), captured unchanged on 2026-11-13 UTC from v0.7.1 using its existing [simulated board API](https://github.com/giovannirco/latchkey/blob/37fc8b33520976b578d3855f012b322bd77a6718/tools/mock_api.py). Two demo locks; no physical hardware or lock commands. | 1440 × 800 |
| `platen-home.png` | [Platen's public README screenshot](https://github.com/giovannirco/platen/blob/master/docs/img/home.png), copied unchanged. Device dashboard with printer, scanner and Paperless controls; an existing documentation image, not a fresh device-health claim. | 1200 × 760 |
| `peephole-demo.png` | [Peephole's public demo screenshot](https://github.com/giovannirco/peephole/blob/main/docs/screenshots/demo.png), copied unchanged. Hosts and readings are synthetic, matching [the demo configuration](https://github.com/giovannirco/peephole/blob/main/examples/demo.yaml). | 1984 × 728 |
| `orrery-public.png` | Screenshot of [the public Orrery](https://orrery.giovanni.dev.br/) on 2026-11-12 UTC, used with the owner's authorization. Captured before launching the interactive flight; no private account or infrastructure data. | 1200 × 800 |

Platen's source blob is `4aa449251cf5827b8bd9961ffe01b435344dbe9b`; Peephole's is `0c9ca69cc8b4b85160e2f6e1805f6e2b8cbf0a93`. Both match the copied image bytes. Preserve their native aspect ratios and keep synthetic-demo labels visible.

Job Scout's screenshot SHA-256 is `fdc5b44f55e0949f138803c5d981ad66b09c221eef58c74c188c57e0c9a11c16`. Its [source license](https://github.com/giovannirco/job-scout/blob/06104250398510fe01ca05607024fc4781c94720/LICENSE) is MIT, Copyright (c) 2026 giovannirco; the permission and warranty text below also applies. The screenshot shows the real interface with synthetic demonstration data, not actual job applications.

## License for the Job Scout, Platen and Peephole images

MIT License

Copyright (c) 2026 Giovanni Coutinho
Copyright (c) 2026 giovannirco (Job Scout)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Latchkey image

The Latchkey screenshot uses synthetic board state, including the displayed battery, activity and hardening warnings. The “Live” indicator refers to the simulated API connection. No real lock, device identifier, passcode or key appears. SHA-256: `5fc5f992d4b576b43be33c5b9e94720ee45e482f8553278b76e6a157a74541a6`.

The UI source is GPL-3.0-or-later at the exact public revision linked above; its license text is preserved in [LICENSE-latchkey.txt](LICENSE-latchkey.txt). This asset is separate from the MIT image notice above.
