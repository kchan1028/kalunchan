---
name: Ka Lun Chan, Engineering Practice
description: An engineering leader's portfolio set as a Bell System Practices manual. Offset paper, ink hairlines, one carrier-blue field per page.
colors:
  carrier-blue: "#1d4fd8"
  carrier-blue-deep: "#173fb0"
  on-blue: "#ffffff"
  on-blue-soft: "#cdd9ff"
  offset-paper: "#f4f5f2"
  paper-sunk: "#e9ebe6"
  ink: "#14171a"
  ink-secondary: "#454c54"
  ink-tertiary: "#5f6770"
  rule-soft: "#c7ccd1"
  colophon-muted: "#b6bcc2"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.2rem + 6.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.2rem + 2.2vw, 3.125rem)"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  subtitle:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    fontVariation: "'wdth' 88"
  lead:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
    fontVariation: "'wdth' 96"
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 86"
  mono:
    fontFamily: "Martian Mono Variable, Martian Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 450
    lineHeight: 1.5
    letterSpacing: "0.02em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 87.5"
rounded:
  none: "0px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "72px"
  s9: "112px"
  s10: "160px"
components:
  action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.offset-paper}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  action-hover:
    backgroundColor: "{colors.carrier-blue}"
    textColor: "{colors.offset-paper}"
  action-on-blue:
    backgroundColor: "{colors.on-blue}"
    textColor: "{colors.carrier-blue}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  action-colophon:
    backgroundColor: "{colors.offset-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 12px"
    height: "56px"
  nav-link-current-number:
    backgroundColor: "{colors.carrier-blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.mono}"
    padding: "2px 5px"
  blue-field:
    backgroundColor: "{colors.carrier-blue}"
    textColor: "{colors.on-blue}"
    rounded: "{rounded.none}"
  decision-chosen:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    padding: "16px 12px"
  colophon:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.offset-paper}"
    padding: "112px 0 24px"
---

# Design System: Ka Lun Chan, Engineering Practice

## Overview

**Creative North Star: "The Engineering Practice Manual"**

The site is set as a Bell System Practices document: every page is a numbered section of one manual (000 Overview, 100 Leadership, 200 Experience, 300 Work, 400 Expertise), headed by a ruled title block, organised by hairline rules, and annotated with figure numbers and years in a small monospace. The ground is cool offset paper; the ink is near-black; colour is almost absent until the page reaches the one region that matters now, which is printed as a solid carrier-blue field with white linework.

Density is that of a technical manual, not a brochure: generous vertical bands (112–160px between them) holding tight, ruled content inside. Structure is carried by lines and type, never by boxes, shadows or rounded containers. Display type is condensed and heavy Archivo, set close; body copy is normal-width Archivo at a readable measure. The page ends in a dark ink colophon that turns the manual over to contact.

**Key Characteristics:**
- One carrier-blue field per page, on the region that matters now.
- Ruled title blocks and hairline rules as the only structure.
- Condensed heavy Archivo display over normal-width Archivo body.
- Martian Mono for numbers only: section numbers, years, figure numbers, the header coordinate.
- Orthogonal schematics in white on blue, horizontal on wide screens and vertical on narrow ones.
- Square corners, no shadows, no cards.
- A dark ink colophon closes every page.

## Colors

A near-monochrome printed palette (paper, ink, grey rules) with one saturated carrier blue used as a field, not a tint.

### Primary
- **Carrier Blue** (`carrier-blue`): the single field per page (home schematic, the current tenure, the open-to panel, the lead case row, the lead capability row, the case-study architecture figure). Also allowed as a small marker: the header coordinate's square, the current nav number chip, the career line's "now" bar and axis end, the chosen decision's state word, link hover on contents rows, focus outlines and text selection.
- **Carrier Blue Deep** (`carrier-blue-deep`): text inside a white-filled accent node on a blue field, where plain blue would read too light.

### Neutral
- **Offset Paper** (`offset-paper`): page ground, header ground, text on ink.
- **Paper Sunk** (`paper-sunk`): the chosen option's band in decision tables; scrollbar track. Never a card fill.
- **Ink** (`ink`): text, the primary action, heavy and hairline rules, the colophon ground.
- **Ink Secondary** (`ink-secondary`): body copy and the header coordinate.
- **Ink Tertiary** (`ink-tertiary`): field labels, mono numbers, rejected options, dotted leaders.
- **Rule Soft** (`rule-soft`): light hairlines between list rows and table cells; resting link underline.
- **On Blue** / **On Blue Soft** (`on-blue`, `on-blue-soft`): linework, text and labels inside the blue field. Hairlines on blue are white at 32% opacity.
- **Colophon Muted** (`colophon-muted`): secondary text in the ink colophon; colophon hairlines are paper at 22% opacity.

### Named Rules
**The One Field Rule.** Each page carries exactly one carrier-blue field, placed on the region that matters now. A second blue field on the same page is a defect. Small blue marks (coordinate square, current-nav chip, now marker, chosen state, focus) do not count as fields and stay small.

**The Printed Ground Rule.** No gradients, tints or translucent panels on paper. Colour arrives as a solid field or not at all.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui)
**Body Font:** Archivo Variable, same family at normal width
**Label/Mono Font:** Martian Mono Variable (with ui-monospace), numbers only

**Character:** One grotesque carries everything by moving along its width axis: squeezed to 68–72% and weighted 750–800 for display, opened to 100% for reading. The monospace is the manual's measuring type, small and quiet, never a voice.

### Hierarchy
- **Display** (800, clamp(3rem → 6rem), 0.94, width 68%): the home thesis only.
- **Headline** (800, clamp(2.5rem → 4.75rem), 0.95, width 68%): the page title inside the title block.
- **Title** (750, clamp(1.875rem → 3.125rem), 1, width 72%): band and section heads, the colophon ask.
- **Subtitle** (700, clamp(1.25rem → 1.5rem), 1.2, width 88%): row and item titles.
- **Page claim** (560, clamp(1.5rem → 2.375rem), 1.18, width 84%, max 34ch): the one plain claim that leads a page.
- **Lead** (400, clamp(1.1875rem → 1.5rem), 1.45, width 96%, max 38ch).
- **Body** (400, 1.0625rem, 1.6, max 66ch, ink secondary).
- **Label** (600, 0.8125rem, +0.01em, width 86%, ink tertiary, sentence case): words that name a field ("Section", "Issue", "Contact", "Open to").
- **Mono** (450, 0.75rem, +0.02em, width 87.5%, tabular figures): section numbers, years, figure numbers, the coordinate.

### Named Rules
**The Measuring Type Rule.** Martian Mono sets only numbers, years, figure numbers ("Fig. 000-1") and the header coordinate. Words that name a field are set as Archivo labels. Prose, headings and buttons are never mono.

**The No Eyebrow Rule.** Nothing sits above a heading as a kicker or eyebrow. A section may carry its number in the margin rail (mono) and a label word inside a title block cell; neither is a tagline. No uppercase tracking anywhere.

## Layout

A 12-column grid (column gap clamp(16px → 28px)) inside a sheet capped at 1440px with gutters of clamp(16px → 56px). The header is sticky at 56px with a 1px ink rule beneath.

Pages open with a ruled title block: a 3px ink head rule, a 1px ink foot rule, and cells separated by 1px ink verticals (section number, title, meta cells, issue). Content bands follow with 112–160px of space above; band heads put the section number in a two-column margin rail (columns 1–2, over a 1px ink rule), the title in columns 3–9 and an aside in 10–12. Page claims and reading content start at column 3.

The home opening splits 7/12 thesis with 5/12 blue schematic field, at most a viewport tall (capped at 940px).

Breakpoints as built: below 900px the grid collapses to one column, the nav becomes a full-screen "Contents" list, the title block wraps and the margin rail disappears; 900–1099px shortens the coordinate; below 760px schematics switch to their vertical drawing; below 600px the coordinate drops its section name and captions stack.

Spacing steps are 4, 8, 12, 16, 24, 32, 48, 72, 112, 160px (`s1`–`s10`); row padding sits at 12–16px, band gaps at 112–160px.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is conveyed by rule weight (3px ink head rules, 1px ink rules, 1px soft rules, dotted leaders) and by the one solid blue field. The sticky header separates from content with its ink rule, not a shadow. The chosen option in a decision table is lifted only by a paper-sunk band between two ink hairlines.

### Named Rules
**The Ruled Not Raised Rule.** If something needs separating, draw a line. Never a shadow, never a floating card.

## Shapes

Square corners throughout (0px); no `border-radius` exists in the build. Forms are rectangles and orthogonal lines: title-block cells, spec-table rows, schematic boxes with right-angle wiring, 6px square tick bullets, the 7px square coordinate mark, square career-line bars. The only circles are the schematic's start and end terminals. Dashed strokes mark branch nodes and the hands-on bus inside schematics; dotted leaders join contents entries to their numbers.

## Components

### Buttons
Solid, square and plain, like a stamped instruction.
- **Shape:** square (0px), 48px minimum height, 24px side padding, 1px border matching the fill.
- **Primary (action):** ink fill, paper text, Archivo 600 at 92% width, trailing arrow icon.
- **Hover / Focus:** fill turns carrier blue over 180ms; the arrow nudges up-right 2px. Focus is a 2px blue outline offset 3px (white on blue, paper on ink).
- **On blue:** white fill, blue text; hover goes transparent with white text.
- **In the colophon:** paper fill, ink text; hover goes carrier blue.
- **Text link with arrow:** Archivo 600, soft underline that darkens on hover, arrow slides 4px right. The secondary action beside every primary.

### Navigation
- Header: wordmark (Archivo 800, 75% width), then the coordinate, then numbered links ("100 Leadership") with the number in mono ink-tertiary and the word in Archivo 600. Current page: number set in a small blue chip and a 3px ink bar on the header rule. Contact is split off by a soft vertical rule with a down arrow.
- Below 900px: a "Contents" toggle opens a full-screen paper sheet of 72px-tall ruled rows in condensed 800 at 2rem.

### Header Coordinate (signature)
Locked at the header's left, after the wordmark: a 7px blue square, then the mono coordinate of the section nearest the top of the viewport ("000 · Overview", "300-2 · Architecture"), read from each section's coordinate attribute. Truncates at 34ch; the section name hides below 600px, leaving the number.

### Title Block (signature)
The ruled head of every page: section number in condensed 800 (2.25rem), page title in the headline style, then meta cells and the issue, each cell a label word over its value. Wraps to rows under soft rules below 900px.

### Blue Field
The one region that matters now on each page, a solid carrier-blue rectangle with white text and linework, soft-blue labels and 32%-white hairlines. Carries a figure caption (mono "Fig." number, Archivo title, key) when it holds a drawing.

### Schematic Diagram (signature)
White orthogonal linework on the blue field. Tiers are named (tier rule under each name); nodes are square-cornered boxes with a 1.25px white stroke; edges carry arrowheads; the decision path is accented at 3px, and its nodes fill white with deep-blue text. One spec is drawn twice: horizontal (tiers left to right) at 760px and above, vertical (tiers top to bottom, max 420px wide) below. On the home signal path, focusing a stage fills its box white and lights its bus; the path draws once on load and is static under reduced motion.

### Decision Table
Options listed as ruled rows (state, option, note). Rejected options stay visible in ink tertiary at 500 weight; the chosen option is struck forward with ink hairlines above and below, a paper-sunk band, and its state word in blue 700.

### Contents List
Ruled rows at 48px minimum height, Archivo 600 entry, dotted leader, mono number at the right; hover turns entry and number blue.

### Colophon
Every page closes on a solid ink band: a condensed title-style ask, the primary action in paper, ruled contact links with muted notes, and a mono base line with issue and year. It is the only dark surface.

## Do's and Don'ts

### Do:
- **Do** give each page exactly one carrier-blue field, on the region that matters now.
- **Do** separate content with rules: 3px ink for heads, 1px ink for structure, 1px soft for rows.
- **Do** set section numbers, years, figure numbers and the coordinate in Martian Mono (0.75rem, tabular).
- **Do** set field-label words as Archivo labels (0.8125rem, 600, 86% width, sentence case).
- **Do** set display and headings in condensed heavy Archivo (68–72% width, 750–800 weight, tight leading).
- **Do** give every new section a coordinate so the header can report it.
- **Do** draw every new schematic from one spec that lays out horizontally at 760px and above and vertically below.
- **Do** end every page on the ink colophon.

### Don't:
- **Don't** use rounded corners, shadows or cards.
- **Don't** put eyebrows or kickers above headings, or use uppercase tracked labels.
- **Don't** set words, prose, headings or buttons in mono.
- **Don't** use blue as a tint, gradient or second field on the same page.
- **Don't** use hero-then-card-grid-then-CTA composition, logo walls or dark neon.
- **Don't** introduce a second dark surface besides the colophon.
