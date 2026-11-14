# Design review — 2026-11-14

All eight approved findings implemented. Content, links, imagery, and orange/charcoal identity preserved. Additional 320px refinement: f08bf80.

Preview: http://127.0.0.1:3001/

## Changes and evidence

- 001: Mobile hydration and visible hero — 01292a7. [Before](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/mobile-before.png) / [After](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/01-rendering-after.png).
- 002: Contact contrast — 4a6b461. [Before](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/contact-before.png) / [After](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/02-contact-mobile-after.png).
- 003: Responsive navigation — 2e53be7. [Before](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/tablet-before.png) / [After](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/03-tablet-after.png).
- 004: Consistent section hierarchy — 6599917. [Before](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/homepage-desktop-before.png) / [After](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/04-heading-after.png).
- 005: Section spacing — e937f32. [Before](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/homepage-desktop-before.png) / [After](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/05-spacing-after.png).
- 006: Article measure — 18e17cf. [Before](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/detail-reading-before.png) / [After](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/06-reading-after.png).
- 007: Platform overlays — ab59d27. [Before](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/homepage-desktop-before.png) / [After](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/07-platforms-after.png).
- 008: Control sizing and affordances — 9dc4873. [Before](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/homepage-desktop-before.png) / [After](C:/Users/Pc/.codex/visualizations/2026/11/14/01a1db0e-e05d-7a32-8705-8558971bd230/08-focus-after.png).

## Validation

Production build passed; separate TypeScript check passed; git diff whitespace check passed. Browser verification covered desktop, tablet, 390px and 320px phone layouts, menu open/close, Escape focus restoration, menu navigation, visible focus rings, and 44px platform controls. Mobile hydration errors cleared after deterministic ribbon rendering.

The preview was restarted on port 3001 after development/build cache conflicts on port 3000. Final desktop and 320px screenshots show the restored preview. Full pointer-hover and reduced-motion emulation were not available in this browser interface; related CSS rules were reviewed.

Design assessment: B baseline to B+ after fixes (provisional visual judgment). Brand-distinctiveness grade remains B. No deployed production changes.
