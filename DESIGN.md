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

## Overview

**Creative North Star: "Case reel"**

Warm charcoal frames paper panels with compact headlines and explicit Before / My decision / After comparisons. Neutral before panels and warm after panels frame an unboxed personal decision; a visible scope note keeps each outcome bounded. Supporting work occupies vertical viewport chapters with quiet ruled rows, while full cases use a paper reading surface.

This records the implemented, user-approved Case reel and its comparison refinement, approved on 2026-10-27 in option B and `.impeccable/mocks/case-comparison.png`. The original reel mockup remains a palette and composition reference; the new comparison mockup supersedes its case contents. The small numbered case labels above titles are explicitly user-approved and do not establish a general eyebrow pattern for other surfaces.

**Key Characteristics:**

- Paper and charcoal surfaces with amber state cues.
- Wix headlines, Plex prose and comparison labels, and Plex Mono navigation.
- Native horizontal cases, vertical chapters, visible neighbors and direct case links.
- Flat before and after panels, an unboxed decision and a visible scope note.

## Colors

The palette pairs warm light paper with near-black charcoal; amber marks decisions and interaction states.

### Primary

- **Amber:** the decision underline, selected index stops, active navigation, hover borders, text selection and dark-surface focus.
- **Paper focus / Read hover / Back underline:** darker amber-family treatments keep fine marks and interaction cues legible on paper. The paper-focus color also identifies the case and personal-decision labels.

### Neutral

- **Ground / Paper / Ink:** page frame, case surfaces and primary text. Reading pages invert the frame's text/surface relationship while retaining the charcoal header.
- **Muted / Supporting text:** metadata and secondary prose on dark surfaces.
- **Line / Paper line / Control line:** section rules, paper dividers and circular control outlines.
- **Comparison before / Comparison after:** a neutral warm gray and pale amber distinguish the two state panels. Their labels carry meaning independently of color.
- **Comparison label:** before, after and scope labels use a muted brown on paper.

**The Surface Contrast Rule.** Use ink text and the darker focus color on paper; use paper text and amber focus on charcoal.

## Typography

Self-hosted Wix Madefor Display 700 is registered as “Wix Display.” IBM Plex Sans supplies 400/500/600; IBM Plex Mono supplies 400. The frontmatter records base declarations; the responsive tables below record effective viewport overrides. No fixed modular ratio is used.

- **Display:** case titles, normally limited to 12ch; mobile allows 15ch; the longer AI title allows 16ch at every width. The intro keeps its larger display treatment.
- **Case label:** the approved numbered category above each case title, uppercase with .1em tracking; numbers are decorative to assistive technology. This does not appear on standalone stories.
- **Headline:** supporting section titles. **Story display:** reading-page titles, limited to 16ch.
- **Title / Body:** project names and explanatory prose; supporting and story paragraphs cap at 70ch.
- **Case summary:** compact explanatory prose, capped at 51ch. Intro summaries retain their larger scale. Reading summaries use 24px/1.5, then 21px on mobile.
- **Comparison label / Title / Body / Decision:** uppercase 600-weight term labels, a stronger state title and plain explanatory prose. The decision has its own body size and darker label. **Case scope:** a separate paragraph with a block label, always visible beneath the comparison.
- **Label:** the functional case index. Mobile index categories switch to Plex Sans, with numbers remaining Plex Mono.
- **Identity / Navigation / Metadata:** the header name, plain links and utility copy. Identity has its own compact weight and tracking rather than inheriting a display headline.
- **Section intro / Section subhead / Lab value:** supporting lead prose, grouped subsection titles and the numerical homelab figures. Story summary and subhead roles keep reading pages distinct.

**The Role Separation Rule.** Reserve Wix for case and section headlines; keep prose and comparison labels in Plex Sans, and navigation details in Plex Mono.

## Layout

The header has a 14.16svh minimum height; the reel section has an 85.84svh minimum. Cards are 68.16vw wide and at least 63.18svh high. Centered scroll padding equals half the remaining viewport width, exposing neighbors. The horizontal reel uses mandatory center snapping. The header and reel share one case chapter inside the main content, with a 100svh minimum height and the accessible name Giovanni Coutinho. Landing pages use native mandatory vertical snapping at this complete case chapter and each supporting chapter, with start alignment and always-stop snap points. The short header is not a separate snap target. Vertical scrolling never drives the horizontal case selection.

Public work, Products, Homelab and How I work each have a minimum height of 100svh, cap at 1120px, use 52px 32px padding and vertically center their content. These are minimums: long phone content or enlarged text grows naturally and remains scrollable. The case chapter can also exceed the viewport; native scrolling within its full snap area keeps the lower controls, swipe hint and exit link reachable before advancing to Public work. Product rows use a 220px name column, a flexible description column and the column-gap token. Above 760px, public-work rows use a 190px name column, a flexible description and a 94px links column, with 24px gaps and 12px vertical padding; upstream links form two columns. Homelab figures use three columns. Reading pages cap at 80ch, use 32px inline padding and 64px/100px top/bottom margins.

Comparison cards use 32px/26px top/bottom padding above phone widths and 28px on phones, with inline padding of 60px, 3.9063vw at 1201–1535px, 44px at 761–1200px and 24px on phones. At 1536px and above their top padding is 36px and minimum height is 65.7svh. The intro retains 44px 60px 38px padding, scaled at compact desktop widths. Its desktop headline and summary remain 68px and 28px; they scale to 4.4271vw and 1.8229vw at 1201–1535px, then clamp(2.5rem, 5vw, 4.25rem) and 23px at 761–1200px.

| Viewport | Case comparison and typography |
| --- | --- |
| ≥1536px | Three columns (1fr .8fr 1fr), 22px gap; title 64px, summary 25px; state title 23px, body and decision 19px, scope 18px. |
| 1001–1535px | Three columns; 18px gap, 15px 16px state padding. Title clamp(42px, 3.65vw, 56px), summary clamp(19px, 1.43vw, 22px); state title 19px, body 16px, decision 17px and scope 16px. |
| 761–1000px | Two equal state columns with the decision spanning both below; 16px gap. Type and state padding match compact desktop; the decision aligns left. DOM reading order stays before, decision, after. |
| ≤760px | Before, decision and after stack in source order; 16px gap, 18px state padding, 4px 18px decision padding. Title clamp(2rem, 8vw, 3rem)/1.1, summary 18px/1.45, label 12px; state title 21px, body and decision 17px, scope 16px. |

| Viewport | Shared reel and chapter changes |
| --- | --- |
| 1201–1535px | Read-link text scales to 1.1719vw; controls to 3.6458vw; index text to 1.0417vw. |
| ≤1200px | Cards widen to 76vw; controls occupy 70% width. |
| ≤760px | Cards widen to 88vw with a 540px minimum height. Header and navigation wrap. Intro summaries use 18px/1.5. Controls are 40px. Supporting rows and upstream links stack; homelab figures use two columns. Sections use 64px 24px padding. Story titles use 38px and prose 18px. |
| ≤360px | Intro inline padding drops to 20px; comparison cards retain 24px. Index categories drop to 11px, control gaps to 4px and navigation gaps to 10px 14px. |

Mobile identity uses 23px, its role and primary navigation use 15px, section intros and reading summaries use 21px, and project titles use 22px. The index uses 12px Sans categories and 11px Mono positions; below 361px categories also use 11px.

Print stacks cards, removes header and reel controls, retains comparisons and scope notes, and resets case-chapter and supporting-chapter minimum heights for a continuous document. Reading pages have no vertical chapter snapping. Minimum heights allow content growth; they are not clipping boundaries.

## Elevation & Depth

No shadows, gradients, glass or hover lifts are implemented. Light/dark surface contrast, clipped neighboring panels, whitespace and thin divider rules establish depth and grouping.

**The Flat Surface Rule.** Keep paper panels and supporting rows shadow-free; use surface contrast and rules for separation.

## Shapes

Paper panels have barely rounded corners. Circles belong to case-index stops and arrow controls. Comparison state panels have square corners, no borders and no shadows. The decision underline is 3px high and 80px wide, reducing to 56px on phones. Dividers use 1px rules. Directional navigation icons are inline 24px SVGs with 1.6px strokes.

## Components

### Reel controls

Outlined circles contain SVG arrows. Hover changes border and icon to amber; disabled controls use opacity .35 and a default cursor. Controls are hidden until JavaScript initializes. Global keyboard focus is a 2px outline offset by 5px; paper surfaces use the paper-focus token.

### Case panel and read link

Each case presents its approved numbered category, title, summary, comparison, visible scope note and full-width reading link separated by a paper rule. The link sits at the bottom of the flex column after content has taken the space it needs. Read links use Plex Mono at 18px/1.5 with a 16px icon gap; mobile uses 15px and a 12px gap. Hover darkens the link. The intro panel uses the same surface with direct GitHub and resume links.

### Navigation and case index

The header separates identity, utility links and primary navigation. Current primary navigation uses amber with an underline; the current language uses paper against muted alternatives. The four-stop case index uses linked circular markers, position numbers and category names. Active markers fill amber. It is navigation, not a decorative label pattern.

The reel supports swipe, arrow controls, focused-reel ArrowLeft/ArrowRight/Home/End, hash links and history. The centered card sets the active marker. Without JavaScript, native scrolling and substantive linked content remain available.

### Case comparison and scope

A semantic definition list groups Before, My decision and After. Each state has a term, bold title and explanatory paragraph; the decision uses plain prose. The neutral before and warm after panels surround an unboxed, centered decision with an amber underline. Scope is a separate paragraph immediately beneath the list, with its own short block label. The same renderer and content appear on the reel and standalone story pages in both languages.

Desktop uses three columns. Tablet places the states side by side with the decision below, while retaining semantic reading order. Phones stack before, decision and after; the decision aligns left and the card grows with its content. State panels use 18px 20px padding at wide desktop, 15px 16px at 761–1535px and 18px on phones. Decision inline padding is zero above 760px. The comparison margin is 28px 0 16px, with 24px top margin below 1536px. Story comparisons use 36px top margin and the following scope has 44px bottom margin.

The four cases retain their factual boundaries: collection and Observe logs stay in place; delivery autonomy applies to covered services; the network result is a verified contained callback with follow-through; the AI example addresses a log-export limit and separately names broader tooling work. No quantitative saving or private artifact is implied by a panel.

Only user-directed navigation moves: explicit reel navigation may scroll smoothly, while reduced motion makes it immediate and disables animations and transitions. Comparisons are static and immediately readable. Chapter snapping stays native.

### Supporting rows and reading pages

Project and product lists use text rows with bottom rules, not additional paper cards. Reading pages retain the header, a back link, case title, summary, comparison and scope, prose sections and related public links. English and Brazilian Portuguese share this system. There are no input fields, chips or filled action-button variants in the current build.

## Do's and Don'ts

### Do:

- Do keep cases horizontal and supporting topics in native vertical viewport chapters, with visible neighboring case panels.
- Do preserve semantic case links, keyboard focus and static content without JavaScript.
- Do use self-hosted fonts and assets under the existing content security policy.
- Do keep before, personal decision, after and scope visible as semantic HTML in both languages and both case surfaces.
- Do let chapters grow beyond the viewport for long content, narrow screens and enlarged text.
- Do keep the header and complete reel in one snap area so phone users can reach its controls, hint and exit link.
- Do allow Brazilian Portuguese labels and prose to wrap.
- Do preserve the explicitly approved numbered case labels without extending them into a general eyebrow style.

### Don't:

- Don't treat the functional numbered case selector as a decorative label style.
- Don't add decorative case schematics, travelling particles, wheel interception or shadow-based elevation.
- Don't use portraits, private employer artifacts or invented evidence.

Evidence: `src/assets/site.css`, `src/assets/site.js`, `scripts/build.mjs`, built English/Portuguese landing pages and shared reading-page comparisons. This refresh records the local implementation before deployment; the approved comparison mockup governs the case interior. Color ramps in the sidecar are generated preview metadata, not additional approved UI tokens. Not canonized or repaired: the HTML theme-color still uses the prior ground value (#14130f); the rendered ground token above is authoritative.
