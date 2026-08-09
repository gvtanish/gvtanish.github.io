# Tanish's Engineering Log

# Lovable Prompt — Portfolio Site (v2: animation + structured plan)



Build a personal portfolio site for me (Tanish, student developer & tech leader) using React + Vite + Tailwind + shadcn/ui + Framer Motion for animation. Static export, deployed at gvtanish.github.io. No backend needed.



## Design direction: "Engineering Logbook"



Avoid generic template looks (no cream+serif+terracotta, no plain dark+neon SaaS look). Build around an engineering logbook / mission-control aesthetic — grounded in real work: rocket avionics, CAD, IoT sensors, school systems engineering.



**Color palette:**

- Background: graphite `#12141A`

- Secondary surface: slate `#1B1F27`

- Primary accent: signal amber `#F0A93A`

- Secondary accent: circuit blue `#5FA8D3`

- Text: off-white `#EDEEF0`, muted `#8A8F98`



**Typography:**

- Headings: JetBrains Mono or Space Grotesk (technical, confident)

- Body: Inter

- Labels/captions: monospace, small, uppercase, letter-spaced — instrument-label style



**Photo:** I'll upload a portrait of myself (formal, black outfit). Treat it as an "ID/spec" module, not a generic circular headshot:

- Rectangular frame with thin amber corner brackets (like a targeting/scan reticle), subtle duotone treatment (graphite shadows + amber highlight) so it sits inside the palette rather than clashing with the black outfit.

- Small mono label beneath it like a spec tag: `OPERATOR: TANISH // STATUS: ACTIVE`.

- Placed in the hero, right side, opposite the name/status block. On scroll, it can have a slow parallax drift (a few px) — nothing gimmicky.

- Placeholder: `[INSERT PHOTO: tanish-portrait.jpg]`.



## Animation & transition spec (Framer Motion)



Be deliberate — one orchestrated feel per section, not scattered effects everywhere. Respect `prefers-reduced-motion` throughout (fall back to instant/opacity-only).



1. **Page load sequence (hero):** staggered reveal — status label fades/slides up first (0.1s), name types/slides in next (0.2s), tagline (0.3s), CTA buttons (0.4s), photo module fades in with the corner brackets "drawing" themselves in (stroke-dashoffset animation, like a scan completing).

2. **Telemetry line:** thin horizontal trace under the hero name, idle slow pulse animation (opacity/glow loop), continuous but subtle.

3. **Scroll-triggered reveals:** each major section (`§01 PROJECTS`, `§02 ACHIEVEMENTS`, etc.) fades + slides up 20px on entering viewport, using `whileInView`, triggered once, staggered children (cards animate in sequence, ~80ms apart).

4. **Project cards:** on hover, lift 4px + subtle amber border glow, status pill scales in slightly; on tap/click (mobile), same effect triggered.

5. **Achievements timeline:** tick marks draw in sequentially (stroke animation) as user scrolls down the timeline, like a progress trace being plotted.

6. **Section dividers (`§01`, `§02`...):** the label and rule line draw left-to-right on scroll entry.

7. **Nav bar:** transparent over hero, transitions to solid slate background with a subtle blur on scroll past hero (smooth, not abrupt).

8. **Page transitions (if multi-page):** quick crossfade + 10px slide, ~200ms, no full blank flashes.

9. **Buttons/links:** all interactive elements get a fast (~150ms) color/underline transition — never instant snap, never sluggish (>300ms).



## Structured section plan



**§00 — Nav:** Logo/initials mark, links to each section, resume/contact CTA button, mobile hamburger with slide-in drawer.



**§Hero:** Name + role + status line (left) / photo module (right) / telemetry line / scroll-down indicator.



**§01 — About:** Short bio (Class 11, PM SHRI KV AFS Sulur, Coimbatore; JEE prep; Vice Captain; iKITES + KRITI alum; learning full-stack via PW Earners). Laid out as a two-column "spec sheet": key facts as labeled rows (ROLE / SCHOOL / FOCUS / LOCATION) next to a short paragraph.



**§02 — Projects:** Grid of spec cards, each with title, one-line description, stack tags, status pill (LIVE / IN PROGRESS / PRESENTED / PROTOTYPE / PROPOSAL):

- SePP — AI-powered LMS for KVS schools; DLMS with dashboards, XP/badges, leaderboard; India's first student-centric KVS DLMS; launched 29 July 2026 at PM SHRI KV Sulur's library (LIVE)

- School Election Voting System — ~1,650 students; Lovable + Supabase; polling agent roster, booth allotment, Google Cloud TTS voiceovers (LIVE)

- KRITI 2026 Sounding Rocket Avionics Payload (IIT Kharagpur) — Arduino Nano, BMP280 + MPU-6050, Kalman filter, triple-vote apogee detection, dual memory redundancy; presented at PRAVAH 2026 (PRESENTED)

- Portable UV-C + Multi-Stage Water Filtration Straw — OpenSCAD CAD design (PROTOTYPE)

- PhytoSonic Index — NCSC 2026-27 proposal; IoT soundscape ecology (PROPOSAL)

- School Traffic Safety Proposal — led as Vice Captain; bus stop/crossing/rumble strip data-driven proposal (PROPOSAL)



**§03 — Achievements:** Vertical timeline with animated tick marks: Bharat Innovates 2026 (via KRITI) · IIT Kharagpur iKITES internship · KRITI programme · Vice Captain win (~72%) · Strong CBSE Class 10 results · Citadel hackathon submission (SePP).



**§04 — Skills:** Three labeled clusters — Web Dev (HTML/CSS/JS, React, Supabase), Hardware/IoT (Arduino, sensors, OpenSCAD/CAD), Tools (Google Cloud TTS, Lovable, data/spreadsheets) — shown as tag chips grouped under mono headers.



**§05 — Contact:** Email, GitHub, LinkedIn placeholders, mailto-based form, footer with a closing status line (e.g. `LOG ENTRY CLOSED // NEXT UPDATE: ONGOING`).



## Technical/SEO requirements

- Fully responsive, mobile-first; all animations degrade gracefully on low-power/reduced-motion.

- Semantic HTML, one h1, logical heading hierarchy.

- Meta title: "Tanish | Student Developer & Tech Leader from Coimbatore"; meta description under 160 chars.

- Open Graph + Twitter Card tags, canonical URL `https://gvtanish.github.io/`.

- JSON-LD `Person` schema in the head.

- Alt text on all images (including the portrait), visible keyboard focus states.

- Placeholder markers like `[ADD GITHUB REPO LINK]` and `[INSERT PHOTO: tanish-portrait.jpg]` wherever I need to plug in real assets.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/837c91a4-d976-4ce5-b619-538ff480862a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
