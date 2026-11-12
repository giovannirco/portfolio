---
name: "Giovanni Coutinho — Case reel"
description: "Paper engineering cases inside a warm charcoal frame."
colors:
  ground: "#181817"
  paper: "#f8f5e8"
  ink: "#161512"
  muted: "#b4ada0"
  amber: "#e8a33d"
  line: "#514b40"
  paper-line: "#aaa397"
  supporting-text: "#d3cdc0"
  paper-focus: "#86540c"
  read-hover: "#81500a"
  control-line: "#777064"
  back-underline: "#9e610b"
  comparison-label: "#625540"
  comparison-before: "#eeeadf"
  comparison-after: "#f7edd7"
typography:
  display:
    fontFamily: '"Wix Display", "Plex Sans", sans-serif'
    fontSize: "clamp(42px, 3.65vw, 56px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-.035em"
  headline:
    fontFamily: '"Wix Display", "Plex Sans", sans-serif'
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.025em"
  story-display:
    fontFamily: '"Wix Display", "Plex Sans", sans-serif'
    fontSize: "clamp(2.5rem, 5.2vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-.035em"
  title:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  case-summary:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "clamp(19px, 1.43vw, 22px)"
    fontWeight: 400
    lineHeight: 1.45
  story-body:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.75
  case-label:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: ".1em"
  comparison-label:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: ".06em"
  comparison-title:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.02em"
  comparison-body:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.45
  comparison-decision:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.45
  case-scope:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: '"Plex Mono", monospace'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  read-link:
    fontFamily: '"Plex Mono", monospace'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  identity:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-.025em"
  identity-role:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  navigation:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  metadata:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  section-intro:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.6
  section-subhead:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.1
  lab-value:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.4
  story-summary:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.5
  story-subhead:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "25px"
    fontWeight: 600
    lineHeight: 1.1
rounded:
  paper: "3px"
  circle: "50%"
spacing:
  gutter: "clamp(24px, 4.1vw, 72px)"
  link-gap: "24px"
  column-gap: "32px"
  reel-gap: "26px"
  mobile-reel-gap: "14px"
  comparison-gap: "22px"
  compact-comparison-gap: "18px"
  stacked-comparison-gap: "16px"
  chapter-block: "52px"
  mobile-chapter-block: "64px"
components:
  reel-control:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.circle}"
    width: "56px"
    height: "56px"
  reel-control-hover:
    textColor: "{colors.amber}"
  case-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.paper}"
    padding: "32px 60px 26px"
  case-index:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "34px 6px 0"
  case-index-current:
    textColor: "{colors.amber}"
  read-case:
    textColor: "{colors.ink}"
    padding: "16px 0 0"
  primary-navigation:
    textColor: "{colors.paper}"
  comparison-before:
    backgroundColor: "{colors.comparison-before}"
    textColor: "{colors.ink}"
    padding: "18px 20px"
  comparison-after:
    backgroundColor: "{colors.comparison-after}"
    textColor: "{colors.ink}"
    padding: "18px 20px"
  comparison-decision:
    textColor: "{colors.ink}"
    typography: "{typography.comparison-decision}"
    padding: "18px 0"
  content-chapter:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.paper}"
    padding: "52px 32px"
---

# Design System: Giovanni Coutinho — Case reel

## Visual identity

Warm charcoal frames paper cases; amber marks navigation and focus. Keep Wix Display for headlines, Plex Sans for prose and Plex Mono for functional reel navigation. No shadows, gradients, portraits or private employer screenshots. The approved numbered case categories remain confined to the reel.

## Opening cases

The case reel stays first. Each paper panel presents an outcome headline, a semantic decision/result definition list, a visible scope note and the existing case link. Desktop proofs use two columns; below 760px they stack. Full Before / My decision / After comparisons belong on the standalone case pages, with their existing responsive state panels and scope notes.

The header and reel remain one native vertical snap area. Cards use 68.16vw width, 76vw below 1201px and 88vw on phones, exposing their neighbors. The minimum case height is 63.18svh, 65.7svh on large desktop and 500px on phones; content can grow. Case titles have a 23ch limit on desktop and use 30px/1.1 on phones. Proof text uses 21px/1.5 on desktop, 18px below 1001px and 16px/1.4 on phones. Scope uses 14px/1.4 on phones.

Keep the four-case index, arrow controls, swipe, direct hashes, browser history and focused-reel ArrowLeft/ArrowRight/Home/End. Mobile index labels can be shorter, while accessible names and desktop labels retain the full subject. The existing Intro remains reachable through navigation. Vertical wheel movement never drives horizontal case selection. Reduced motion disables smooth transitions.

## Project and product chapters

The charcoal chapters cap at 1120px and use 88px block padding, 64px on phones. They have a 100svh minimum, not a height cap. Long content stays natively scrollable; chapter snapping does not clip its final links.

Featured entries use an unboxed two-column composition: project name, purpose, contribution, decision and maturity on one side, evidence on the other. The grid is 1fr/1.2fr with a 48px gap, stacking below 1001px. Entries have 56px block padding, 40px on phones, and a thin bottom rule. Project titles use 34px/1.15 Wix, 30px on phones; taglines use 23px/1.35, 22px on phones. Role and status have quieter 16px and 15px treatments without becoming badges.

Screenshots preserve their native aspect ratios, have explicit dimensions and alt text, and load lazily. Captions distinguish public documentation from synthetic demonstrations. Images are copied unchanged and fingerprinted by the build. Provenance and license notices live alongside the source assets. Workflow figures are semantic ordered lists labeled “How it works”, not imitations of product interfaces. Their numbers communicate actual step order; they do not establish a decorative numbering system.

The remaining entries use ruled rows: a 220px name column plus flexible copy, with purpose, contribution, status and an internal story link. Phones stack the rows. Upstream contributions remain a separate group, and the homelab chapter retains its dated inventory boundary.

## Reading pages

Case stories retain the paper reading surface, full comparisons, unchanged factual body sections and existing URLs. Project/product stories use the same header, paper, back link and typography, with a 1000px maximum width. They present a name, purpose, summary, available evidence, contribution/decision/status definition list and substantive prose. Plano Adentro uses only the approved public summary and destination.

Project facts use two columns with status spanning the row, stacking on phones. Workflow figures run horizontally on wide reading pages and vertically on phones. Every story has a same-story language switch and a native return link to its chapter. Both languages remain substantive without JavaScript.

## Accessibility and delivery

Preserve the skip link, semantic headings, native links, visible focus and readable content at enlarged text sizes. Use ink and darker amber focus on paper; use paper and amber focus on charcoal. Do not hide substantive text behind animation. Real screenshots supplement the text; they do not carry the only account of the work.

Content and route checks cover language parity, preserved case URLs, internal project discovery, attribution and maturity boundaries. Browser checks cover phone proof visibility, keyboard/history, no-JavaScript reading, loaded evidence, contrast, long chapter reachability and deployment endpoints.

Evidence: src/content.mjs, scripts/build.mjs, src/assets/site.css, src/assets/site.js and the static/browser tests. The palette and font tokens above remain authoritative. Older comparison mockups document the standalone-case treatment; the opening proof and richer chapters supersede their homepage composition. Pre-existing sidecar preview drift is not an additional source of UI requirements.
