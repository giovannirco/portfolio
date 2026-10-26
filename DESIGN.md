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
  diagram-muted: "#625540"
  boundary-tint: "#e8a33d12"
  blocked-path: "#92501b"
  evidence-line: "#9b8f7b"
typography:
  display:
    fontFamily: '"Wix Display", "Plex Sans", sans-serif'
    fontSize: "68px"
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
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.45
  story-body:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.75
  diagram:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: '"Plex Mono", monospace'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  diagram-emphasis:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.35
  diagram-caption:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.4
  diagram-secondary:
    fontFamily: '"Plex Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.35
  diagram-detail:
    fontFamily: '"Plex Mono", monospace'
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
  diagram-enforcement:
    fontFamily: '"Plex Mono", monospace'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
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
  diagram-gap: "32px"
  mobile-diagram-gap: "18px"
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
    padding: "44px 60px 38px"
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
  case-diagram:
    textColor: "{colors.ink}"
    typography: "{typography.diagram}"
  content-chapter:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.paper}"
    padding: "52px 32px"
---

# Design System: Giovanni Coutinho — Case reel

## Overview

**Creative North Star: "Case reel"**

Warm charcoal frames paper panels with strong, compact headlines and precise engineering diagrams. Visible neighboring panels establish sequence; generous interior space keeps each decision readable. Supporting work occupies vertical viewport chapters with quiet ruled rows, while full cases use a paper reading surface. Four static illustrations explain different engineering relationships.

This records the implemented, user-approved Case reel and its chapter refinement. The mockup establishes palette and reel composition only; the approved direction contract and source supersede its diagram treatment. The numbered four-stop selector remains functional navigation; duplicated labels above panel titles were removed during finish review.

**Key Characteristics:**

- Paper and charcoal surfaces with amber state cues.
- Wix headlines, Plex prose and diagram labels, and Plex Mono technical details.
- Native horizontal cases, vertical chapters, visible neighbors and direct case links.
- Flat surfaces and distinct static engineering illustrations.

## Colors

The palette pairs warm light paper with near-black charcoal; amber connects diagrams and interaction states.

### Primary

- **Amber:** collection and release accents, selected index stops, active navigation, hover borders, text selection and dark-surface focus.
- **Paper focus / Read hover / Back underline:** darker amber-family treatments keep fine marks and interaction cues legible on paper. Back underline also colors diagram connectors and the policy boundary.
- **Boundary tint / Blocked path:** a faint amber wash defines the enforcement area; a deeper brown marks the blocked traffic line. Geometry and text carry the distinction as well as color.

### Neutral

- **Ground / Paper / Ink:** page frame, case surfaces and primary text. Reading pages invert the frame's text/surface relationship while retaining the charcoal header.
- **Muted / Supporting text:** metadata and secondary prose on dark surfaces.
- **Line / Paper line / Control line:** section rules, paper dividers and circular control outlines.
- **Diagram muted / Evidence line:** supporting diagram text and the non-text evidence-sheet strokes, respectively.

**The Surface Contrast Rule.** Use ink text and the darker focus color on paper; use paper text and amber focus on charcoal.

## Typography

Self-hosted Wix Madefor Display 700 is registered as “Wix Display.” IBM Plex Sans supplies 400/500/600; IBM Plex Mono supplies 400. The frontmatter records desktop defaults; responsive overrides are below. No fixed modular ratio is used.

- **Display:** short case titles, normally limited to 12ch; mobile allows 15ch; the longer AI title allows 16ch at every width. Titles start directly, without an eyebrow.
- **Headline:** supporting section titles. **Story display:** reading-page titles, limited to 16ch.
- **Title / Body:** project names and explanatory prose; supporting and story paragraphs cap at 70ch.
- **Case summary:** prominent prose, capped at 51ch. Reading summaries use 24px/1.5, then 21px on mobile.
- **Diagram / Diagram emphasis:** Plex Sans relationship labels, with 600-weight emphasis for the owner, destination or result. Captions use the smaller caption role; secondary labels stay Sans, while source names, release targets and enforcement notes use Mono detail roles.
- **Label:** the functional case index. Mobile index categories switch to Plex Sans, with numbers remaining Plex Mono.
- **Identity / Navigation / Metadata:** the header name, plain links and utility copy. Identity has its own compact weight and tracking rather than inheriting a display headline.
- **Section intro / Section subhead / Lab value:** supporting lead prose, grouped subsection titles and the numerical homelab figures. Story summary and subhead roles keep reading pages distinct.

**The Role Separation Rule.** Reserve Wix for case and section headlines; keep prose and diagram relationships in Plex Sans, and technical details in Plex Mono.

## Layout

The header has a 14.16svh minimum height; the reel section has an 85.84svh minimum. Cards are 68.16vw wide and at least 63.18svh high. Centered scroll padding equals half the remaining viewport width, exposing neighbors. The horizontal reel uses mandatory center snapping. The header and reel share one case chapter inside the main content, with a 100svh minimum height and the accessible name Giovanni Coutinho. Landing pages use native mandatory vertical snapping at this complete case chapter and each supporting chapter, with start alignment and always-stop snap points. The short header is not a separate snap target. Vertical scrolling never drives the horizontal case selection.

Public work, Products, Homelab and How I work each have a minimum height of 100svh, cap at 1120px, use 52px 32px padding and vertically center their content. These are minimums: long phone content or enlarged text grows naturally and remains scrollable. The case chapter can also exceed the viewport; native scrolling within its full snap area keeps the lower controls, swipe hint and exit link reachable before advancing to Public work. Product rows use a 220px name column, a flexible description column and the column-gap token. Above 760px, public-work rows use a 190px name column, a flexible description and a 94px links column, with 24px gaps and 12px vertical padding; upstream links form two columns. Homelab figures use three columns. Reading pages cap at 80ch, use 32px inline padding and 64px/100px top/bottom margins.

| Viewport | Implemented changes |
| --- | --- |
| 1201–1535px | Panel padding scales to 2.8646vw 3.9063vw 2.474vw; case titles to 4.4271vw; summaries to 1.8229vw; read-link text to 1.1719vw; controls to 3.6458vw; index text to 1.0417vw. |
| ≤1200px | Cards widen to 76vw with 36px 44px padding. Titles use clamp(2.5rem, 5vw, 4.25rem); summaries use 23px. Controls occupy 70% width. |
| ≤760px | Cards widen to 88vw with a 540px minimum height and 28px 24px padding. Header and navigation wrap. Titles use clamp(2rem, 8vw, 3rem)/1.1; summaries use 18px/1.5. Diagram labels use 14px; captions 13px; technical sources and boundary labels 12px; enforcement notes 11px. Controls are 40px. Supporting rows and upstream links stack; figures use two columns. Sections use 64px 24px padding. Story titles use 38px and prose 18px. |
| ≤360px | Panel inline padding drops to 20px; index categories to 11px; control gaps to 4px; navigation gaps to 10px 14px. |

Mobile identity uses 23px, its role and primary navigation use 15px, section intros and reading summaries use 21px, and project titles use 22px. The index uses 12px Sans categories and 11px Mono positions; below 361px categories also use 11px.

Print stacks cards, removes header and reel controls, retains static diagrams, resets case and supporting chapter minimum heights and reduces headings for a continuous document. Reading pages have no vertical chapter snapping. Minimum heights allow content growth; they are not clipping boundaries.

## Elevation & Depth

No shadows, gradients, glass or hover lifts are implemented. Light/dark surface contrast, clipped neighboring panels, whitespace and thin divider rules establish depth and grouping.

**The Flat Surface Rule.** Keep paper panels and supporting rows shadow-free; use surface contrast and rules for separation.

## Shapes

Paper panels have barely rounded corners. Circles belong to case-index stops and arrow controls. Diagram sheets and policy boundaries have square corners; dividers and connectors use 1px lines, with 2px or 4px amber accents. Directional icons are inline 24px SVGs with 1.6px strokes; static illustration paths use 1.5px strokes, with a 2px blocked path.

## Components

### Reel controls

Outlined circles contain SVG arrows. Hover changes border and icon to amber; disabled controls use opacity .35 and a default cursor. Controls are hidden until JavaScript initializes. Global keyboard focus is a 2px outline offset by 5px; paper surfaces use the paper-focus token.

### Case panel and read link

Each case presents a title, summary, distinct static illustration with a caption and full-width reading link separated by a paper rule. Read links use Plex Mono at 18px/1.5 with a 16px icon gap; mobile uses 15px and a 12px gap. Hover darkens the link. The intro panel uses the same surface with direct GitHub and resume links.

### Navigation and case index

The header separates identity, utility links and primary navigation. Current primary navigation uses amber with an underline; the current language uses paper against muted alternatives. The four-stop case index uses linked circular markers, position numbers and category names. Active markers fill amber. It is navigation, not a decorative label pattern.

The reel supports swipe, arrow controls, focused-reel ArrowLeft/ArrowRight/Home/End, hash links and history. The centered card sets the active marker. Without JavaScript, native scrolling and substantive linked content remain available.

### Case illustrations

Each semantic figure combines HTML labels and a decision caption with decorative inline SVG geometry. No travelling particle, signal animation or common three-dot sequence remains. The same illustration appears in its reel panel and full reading page.

- **Observability:** a persistent collection layer branches to separate metrics/traces and logs destinations. Its two-column grid uses a 1:1.5 ratio, becoming .8:1 on phones.
- **Delivery:** service owners feed a release sheet with shared templates, a reviewed change and the Argo CD target. The 1:2 grid stacks on phones; the owner and connector become an inline row.
- **Network policy:** an outlined, tinted policy boundary contains the permitted destination. Separate allowed and blocked traffic lanes show enforcement; a Mono note names Hubble. The stopped line and text distinguish blocked traffic without relying on color alone.
- **AI tooling:** the engineering question and named MCP sources connect to an evidence sheet ending in engineer review. The grid changes from 1.2:1 to equal columns on phones.

Illustration grids use a 142px minimum height and 32px gap, becoming 160px and 18px on phones. Captions sit 14px below the art. Reading-page figures use 36px/48px top/bottom margins. Only user-directed navigation moves: explicit reel navigation may scroll smoothly, while reduced motion makes it immediate and disables animations and transitions. Chapter snapping stays native.

### Supporting rows and reading pages

Project and product lists use text rows with bottom rules, not additional paper cards. Reading pages retain the header, a back link, case title, summary, diagram, prose sections and related public links. English and Brazilian Portuguese share this system. There are no input fields, chips or filled action-button variants in the current build.

## Do's and Don'ts

### Do:

- Do keep cases horizontal and supporting topics in native vertical viewport chapters, with visible neighboring case panels.
- Do preserve semantic case links, keyboard focus and static content without JavaScript.
- Do use self-hosted fonts and assets under the existing content security policy.
- Do use four distinct static illustrations with HTML labels and explanatory captions.
- Do let chapters grow beyond the viewport for long content, narrow screens and enlarged text.
- Do keep the header and complete reel in one snap area so phone users can reach its controls, hint and exit link.
- Do allow Brazilian Portuguese labels and prose to wrap.

### Don't:

- Don't reintroduce duplicate eyebrows above case titles.
- Don't treat the functional numbered case selector as a decorative label style.
- Don't add travelling particles, repeated three-dot case diagrams, wheel interception or shadow-based elevation.
- Don't use portraits, private employer artifacts or invented evidence.

Evidence: `src/assets/site.css`, `src/assets/site.js`, `scripts/build.mjs`, built English/Portuguese landing pages and all four reading-page diagram patterns. This refresh records the local implementation before deployment; the older mockup is only a palette and reel-composition reference. Color ramps in the sidecar are generated preview metadata, not additional approved UI tokens. Not canonized or repaired: the HTML theme-color still uses the prior ground value (#14130f); the rendered ground token above is authoritative.
