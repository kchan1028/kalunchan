---
name: Ka Lun Chan, Engineering Practice
description: An engineering leader's portfolio set as a Bell System Practices manual with a bento front sheet, printed on offset paper or reversed on dark stock. Ink hairlines, one carrier-blue field per page.
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
  dark-paper: "#101315"
  dark-paper-sunk: "#1a1e22"
  dark-ink: "#eef0ec"
  dark-ink-secondary: "#c2c8ce"
  dark-ink-tertiary: "#a0a8b0"
  dark-rule: "#868e96"
  dark-rule-soft: "#363c42"
  dark-blue: "#8fb0ff"
  dark-blue-deep: "#a9c2ff"
  dark-on-blue: "#0b1220"
  dark-on-blue-soft: "#1c2a4a"
typography:
  hero-tile:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 4.2vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 68"
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
  phone-frame: "14px"
  phone-frame-narrow: "10px"
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
  tile:
    backgroundColor: "{colors.offset-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
  tile-hero:
    backgroundColor: "{colors.carrier-blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.hero-tile}"
    rounded: "{rounded.none}"
    padding: "24px"
  tile-resume:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.offset-paper}"
    rounded: "{rounded.none}"
    padding: "24px"
  tile-skills:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
  phone-frame:
    backgroundColor: "{colors.offset-paper}"
    rounded: "{rounded.phone-frame}"
---

# Design System: Ka Lun Chan, Engineering Practice

## Overview

**Creative North Star: "The Engineering Practice Manual"**

The site is set as a Bell System Practices document: every inner page is a numbered section of one manual (050 About, 090 Summary, 100 Leadership, 200 Experience, 300 Projects, 400 Expertise, 650 Writing, 700 Contact, with 500 Community and 600 Mentorship linked from About), headed by a ruled title block, organised by hairline rules, and annotated with figure numbers and years in a small monospace. The ground is cool offset paper; the ink is near-black; colour is almost absent until the page reaches the one region that matters now, which is printed as a solid carrier-blue field with white linework.

The homepage is the manual's cover sheet: a one-page summary laid out as a bento grid of ruled tiles, so someone scanning for 30 seconds gets who, what level, what was built and how to make contact without opening a section. It has no title block. The inner pages keep the manual's form, and tiles stay on the cover sheet.

The whole manual also prints in reverse. The theme follows the system until the reader chooses with the header toggle, and dark stock swaps the paper and ink through the same tokens rather than restyling anything.

Density is that of a technical manual, not a brochure: generous vertical bands (112–160px between them) holding tight, ruled content inside. Outside the cover sheet, structure is carried by lines and type, never by boxes, shadows or rounded containers. Display type is condensed and heavy Archivo, set close; body copy is normal-width Archivo at a readable measure. The page ends in a dark ink colophon that turns the manual over to contact.

**Key Characteristics:**
- One carrier-blue field per page, on the region that matters now.
- A bento cover sheet on the home; ruled title blocks and hairline rules as the only structure everywhere else.
- Light and dark printings of the same tokens, following the system until the reader chooses.
- Condensed heavy Archivo display over normal-width Archivo body.
- Martian Mono for numbers only: section numbers, years, figure numbers, the header coordinate.
- Orthogonal schematics in white on blue, horizontal on wide screens and vertical on narrow ones.
- Square corners, no shadows, no cards, apart from the named exceptions in Elevation & Depth and Shapes.
- A dark ink colophon closes every page.

## Colors

A near-monochrome printed palette (paper, ink, grey rules) with one saturated carrier blue used as a field, not a tint.

### Primary
- **Carrier Blue** (`carrier-blue`): the single field per page (the home hero tile, the current tenure, the open-to panel, the lead case row, the lead capability row, the case-study architecture figure). Also allowed as a small marker: the header coordinate's square, the current nav number chip, the career line's "now" bar and axis end, the chosen decision's state word, the hiring focus rule, the case tile's result figure, link hover on contents rows, focus outlines and text selection.
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

### Dark Printing
Each light token above has a dark counterpart (the `dark-` tokens), resolved with `light-dark()` on the same CSS variable. Paper becomes a near-black stock, ink becomes a warm off-white, and rules soften. Dark Blue is a much lighter periwinkle because it only ever appears on dark stock as a small mark or a figure, with Dark On Blue as the text on those marks. Blue fields, the colophon, the résumé tile and the writing journey's act strip hold their light values in both printings, so a field is the same saturated carrier blue with white linework either way. Browsers without `light-dark()` get the light printing and no toggle.

### Named Rules
**The Reverse Printing Rule.** Dark is the same manual on different stock. New colours are added as `light-dark()` tokens, never as per-theme overrides, and any new surface that paints blue as a field joins the list that stays on light values.


**The One Field Rule.** Each page carries at most one carrier-blue field, placed on the region that matters now. A second blue field on the same page is a defect. `/engineering-leadership/` currently has none. Small blue marks (coordinate square, current-nav chip, now marker, chosen state, focus) do not count as fields and stay small.

**The Printed Ground Rule.** No gradients, tints or translucent panels on paper. Colour arrives as a solid field or not at all.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui)
**Body Font:** Archivo Variable, same family at normal width
**Label/Mono Font:** Martian Mono Variable (with ui-monospace), numbers only

**Character:** One grotesque carries everything by moving along its width axis: squeezed to 68–72% and weighted 750–800 for display, opened to 100% for reading. The monospace is the manual's measuring type, small and quiet, never a voice.

### Hierarchy
- **Hero tile** (800, clamp(2.5rem → 5.25rem), 0.94, width 68%, max 17ch): the home headline, the display style resized to fit its tile.
- **Tile figure** (800, headline size, 0.95, width 68%, blue): the one result number in a case tile.
- **Display** (800, clamp(3rem → 6rem), 0.94, width 68%): the display size scale; the home headline overrides it with the hero tile size.
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

**The No Eyebrow Rule.** Nothing sits above a heading as a kicker or eyebrow. A section may carry its number in the margin rail (mono) and a label word inside a title block cell; neither is a tagline. The one exception is the case tile on the cover sheet, whose lines above the title name the role and where the work happened. No uppercase tracking anywhere.

## Layout

A 12-column grid (column gap clamp(16px → 28px)) inside a sheet capped at 1440px with gutters of clamp(16px → 56px). The header is sticky at 56px with a 1px ink rule beneath.

Inner pages open with a ruled title block: a 3px ink head rule, a 1px ink foot rule, and cells separated by 1px ink verticals (section number, title, meta cells, issue). Content bands follow with 112–160px of space above; band heads put the section number in a two-column margin rail (columns 1–2, over a 1px ink rule), the title in columns 3–9 and an aside in 10–12. Page claims and reading content start at column 3.

The home is a bento grid with 12px gaps: one column on phones, two from 640px, twelve from 1100px. At twelve columns the hero takes nine with the résumé tile beside it, the three lead case studies take four each, the two compact case studies take six each, and skills and the personal tile take five and seven. On phones the first case study comes straight after the hero, before the résumé. Every tile has an explicit placement at every width.

Breakpoints as built: below 640px the bento is one column, and below 1100px it is two; from 1280px the schematic appears in the hero; below 1400px the nav becomes a full-screen "Contents" list; below 900px the grid collapses to one column, the title block wraps and the margin rail disappears; 900–1099px shortens the coordinate; below 760px schematics switch to their vertical drawing; below 600px the coordinate drops its section name and captions stack. Below 370px the header drops the coordinate and the word "Contents", keeping the menu's bars and its accessible name. From 1400px the header coordinate is hidden, and from 1560px the Bay Area local time appears.

Spacing steps are 4, 8, 12, 16, 24, 32, 48, 72, 112, 160px (`s1`–`s10`); row padding sits at 12–16px, band gaps at 112–160px.

## Elevation & Depth

Flat, with two narrow exceptions. Depth is conveyed by rule weight (3px ink head rules, 1px ink rules, 1px soft rules, dotted leaders) and by the one solid blue field. The sticky header separates from content with its ink rule, not a shadow. The chosen option in a decision table is lifted only by a paper-sunk band between two ink hairlines. Inset shadows that draw a rule (a 2–4px bar along one edge) are rules, not elevation.

### Shadow Vocabulary
- **Case tile lift** (`0 10px 24px -14px rgb(20 23 26 / 0.45)`, with a 3px rise): only on a home case tile that is hovered or holds focus, and only when motion is allowed. It says the whole tile is one link.
- **Phone frame** (`0 1px 0 var(--rule), 0 18px 40px -18px rgb(20 23 26 / 0.45)`): only on the phone view laid over a project screenshot, so it reads as a separate device.

### Named Rules
**The Ruled Not Raised Rule.** If something needs separating, draw a line. Outside the two entries above, never a shadow, never a floating card.

## Shapes

Square corners throughout (0px), bento tiles included. The exceptions are the phone frame over project screenshots, whose rounded corners draw a real device, and small marks inside article figures (legend swatches, cost bars, reading path dots). Forms are rectangles and orthogonal lines: title-block cells, spec-table rows, schematic boxes with right-angle wiring, 6px square tick bullets, the 7px square coordinate mark, square career-line bars. Outside article figures, the only circles are the schematic's start and end terminals. Dashed strokes mark branch nodes and the hands-on bus inside schematics; dotted leaders join contents entries to their numbers.

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
- Header: wordmark (Archivo 800, 75% width), then the coordinate and local time where the width allows them, the Search button, the theme toggle, then numbered links ("100 Leadership") with the number in mono ink-tertiary and the word in Archivo 600. Current page: number set in a small blue chip and a 3px ink bar on the header rule.
- Theme toggle: a bare 44px sun or moon icon in ink that turns blue on hover. It follows the system until pressed, then remembers the choice in local storage and applies it before first paint.
- Below 1400px: a "Contents" toggle opens a full-screen paper sheet of 72px-tall ruled rows in condensed 800 at 2rem.

### Header Coordinate (signature)
Locked at the header's left, after the wordmark: a 7px blue square, then the mono coordinate of the section nearest the top of the viewport ("000 · Overview" on the home, "300-2 · Architecture"), read from each section's coordinate attribute. Truncates at 34ch; the section name hides below 600px, leaving the number.

### Title Block (signature)
The ruled head of every page: section number in condensed 800 (2.25rem), page title in the headline style, then meta cells and the issue, each cell a label word over its value. Wraps to rows under soft rules below 900px.

### Pressed Type (signature)
Page titles, the home headline and band heads press into place word by word along the width axis: from 125% width at weight 300 to their final setting over 900ms, 70ms between words. Page titles play on load; band heads play once as they scroll in. The final layout is reserved, so nothing shifts. Static under reduced motion. Contents entries open to 112% width on hover.

### Blue Field
The one region that matters now on each page, a solid carrier-blue rectangle with white text and linework, soft-blue labels and 32%-white hairlines. Carries a figure caption (mono "Fig." number, Archivo title, key) when it holds a drawing.

### Schematic Diagram (signature)
White orthogonal linework on the blue field. Tiers are named (tier rule under each name); nodes are square-cornered boxes with a 1.25px white stroke; edges carry arrowheads; the decision path is accented at 3px, and its nodes fill white with deep-blue text. One spec is drawn twice: horizontal (tiers left to right) at 760px and above, vertical (tiers top to bottom, max 420px wide) below. The stacked version in the home hero keeps the vertical drawing at every width and drops sub-labels. Its wiring draws once on load, then the critical path, and it is static under reduced motion.
### Decision Table
Options listed as ruled rows (state, option, note). Rejected options stay visible in ink tertiary at 500 weight; the chosen option is struck forward with ink hairlines above and below, a paper-sunk band, and its state word in blue 700.

Above the tables, "Make these calls yourself first" hides each decision's notes and reasoning and turns its options into plain ruled buttons. Picking one opens the normal table with "your pick" added to that row's state word and a short line saying whether it matched. There's no score and nothing is called wrong. The tables are open by default, so scanning and crawling are unaffected, and the button appears only after hydration.

### Reading Path Progress
Opt-in: a line above the paths on `/writing/` offers "Remember what I've read", and nothing is stored until the reader presses it. After that, reaching the end of a post marks it as read in this browser's local storage, and each path adds "2 of 5 read" to its label, a quiet "Read" beside finished posts, and a link to continue with the first unread one. "Forget what I've read" clears the list and turns it off. All of it appears only after hydration, and `/privacy/` must keep describing it.

### Site Search
A Search button in the header, or Cmd/Ctrl+K, opens a modal with a square-cornered panel under a heavy top rule. Typing filters pages, projects, case studies and posts by title, summary and topic, not full post text. Results are ruled rows; the current row gets a sunk fill and an ink bar, with no blue. No animation. The button stays hidden until hydration, since it needs JavaScript, and the index loads as its own chunk on first open.

### Contents List
Ruled rows at 48px minimum height, Archivo 600 entry, dotted leader, mono number at the right; hover turns entry and number blue.

### Focus Picker
The same four focuses and the same `?for=` value work on two pages, `/projects/` and `/experience/`, which ask "What are you looking for?". On `/projects/`, the picker sits under the lead; choosing one lists the matching case studies ahead of the shipped products, with the first match taking the blue lead row, and only focuses with a real case study are offered. On `/experience/`, it sits above the progression figure; roles outside the focus collapse to their headings, so the career still reads in order, and a link to a collapsed role opens it. Choosing the active focus again clears it, and the status line says so wherever content is hidden.

### Bento Tiles (home, signature)
The cover sheet's only container, and it stays on the home. A tile is a square-cornered rectangle with a 1px soft rule, 24px padding and no fill of its own.
- **Hero:** the page's one blue field, holding the name, the headline, one confirmed proof line, the primary action in white with LinkedIn beside it, availability as a plain text link, and a short location. From 1280px the right column carries the stacked schematic behind a white hairline.
- **Résumé:** the one inverted tile, ink ground with paper text and a paper action sitting at the tile's foot. It holds its ink in both printings, so the blue field stays the brightest thing on the page, with a paper hairline at 22% to separate it from dark stock.
- **Case study:** the title link covers the whole tile, so it is one target and one tab stop. Role in bold over where the work happened, then the title and result. Lead tiles have a confirmed figure in blue and one line on the problem; compact tiles state the outcome only. The foot says where the link goes: "Read the case study" or "Read the post". Hover and focus rise 3px with the case tile lift and underline the title.
- **Skills:** paper-sunk ground with labelled rows.
- **Personal:** a photo running edge to edge with a "Ride a lap" button; pressing it sends a small rider along the bottom of the photo and counts laps. Reduced motion skips the ride and still counts.

Contact is left to the hero and the colophon, so no tile repeats it.

### Project Shot
A desktop screenshot in a ruled frame with the phone view laid over its corner. The phone frame is the one rounded, shadowed object in the manual, because it draws a device.

### Project Showcase (projects)
Recorded previews of the live sites sit in a sideways row of ruled frames that snaps card by card and bleeds off the right edge. The front card sits at full strength and the others at 62%, with a 2px blue line and a counter tracking position. With a mouse, hovering or keyboard-focusing a card plays its clip and zooms it 2.5%. Touch devices play only the front card once a swipe settles, with a pause button. Posters are real images in the page, so reduced motion, data saver and failed videos all show the same stills. Clips come from `scripts/record-project-previews.mjs`, and each ends by dissolving into its first frame, which is also its poster.

### Writing Journey (/writing/)
Five acts through the writing under the page's one blue field. At 1100×680 and larger, the field stays pinned on the left (CSS sticky) with a strip of act links at its top; each act's title, principle, proof and figure pass through it while the articles scroll beside them. GSAP ScrollTrigger, loaded only in this layout, adds scroll-linked detail: figure lines draw and their squares fill, the large act number drifts up to 60px each way, article rows rule in. Titles press in once rather than following the scroll. Smaller screens, short screens and reduced motion get a plain document with a slim sticky blue strip of act links instead, and never download GSAP. Figures reuse text from figures in the linked posts, keep their figure numbers, and are hidden below 760px. The nine chapters and every existing anchor live in the library below.

### Print-In Motion
Below the fold, blue fields wipe in from the left, and figures, images and plain section heads wipe in from the top, once each. The title block's head rule draws across on load, and a 2px blue line on the header rule tracks scroll progress. Everything is visible without JavaScript or under reduced motion.

### Page Transition
Following a link to another page fades the page out over 180ms while a 2px blue loading line starts along the header rule. The page swaps while invisible, then fades in as the line finishes and fades away, and the new title presses in as it arrives. The header never moves. Back, forward, redirects and same-page anchors skip it, and reduced motion swaps pages with no fade.

### Print
Printing drops the header, colophon and skip link, forces the light printing, and shows anything still waiting to wipe in. `/engineering-leadership/` also hides its actions and adds a contact line, so it forwards as a clean document.

### Colophon
Every page closes on a solid ink band: three large proof figures that link to their evidence (left off the home, `/engineering-leadership/` and `/contact/`, which already lead with the ask), a condensed title-style ask, the primary action in paper, ruled contact links with muted notes, and a mono base line with issue and year. It keeps its light-printing values in both themes, so on dark stock it sits one barely lighter step off the page ground and is set apart mostly by its spacing. Apart from the résumé tile, it is the only inverted surface.

## Do's and Don'ts

### Do:
- **Do** give each page at most one carrier-blue field, on the region that matters now.
- **Do** separate content with rules: 3px ink for heads, 1px ink for structure, 1px soft for rows.
- **Do** set section numbers, years, figure numbers and the coordinate in Martian Mono (0.75rem, tabular).
- **Do** set field-label words as Archivo labels (0.8125rem, 600, 86% width, sentence case).
- **Do** set display and headings in condensed heavy Archivo (68–72% width, 750–800 weight, tight leading).
- **Do** give every new section a coordinate so the header can report it.
- **Do** draw every new schematic from one spec that lays out horizontally at 760px and above and vertically below.
- **Do** end every page on the ink colophon.
- **Do** add new colours as `light-dark()` tokens and check every new surface in both printings.

### Don't:
- **Don't** use rounded corners, shadows or cards, outside the phone frame, the case tile lift and the home's bento tiles.
- **Don't** bring bento tiles to any page but the home.
- **Don't** put eyebrows or kickers above headings, or use uppercase tracked labels. The case tile's role lines are the only exception.
- **Don't** set words, prose, headings or buttons in mono.
- **Don't** use blue as a tint, gradient or second field on the same page.
- **Don't** use hero-then-card-grid-then-CTA composition on inner pages, or logo walls or dark neon anywhere.
- **Don't** add another inverted surface besides the colophon and the résumé tile.
