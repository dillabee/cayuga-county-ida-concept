# Collaborate Cayuga — Concept Site

Design concept prepared by Camoin Associates / ProspectEngage(R) for CCIDA review.
**Not an official Cayuga County IDA or partner agency website.** Content assembled from
public sources, July 2026. Records labeled SAMPLE and items marked with a flag require
confirmation before launch.

Collaborate Cayuga is positioned as the shared front door for Cayuga County's economic
development agencies, ahead of a formal one-stop shop. Four agencies are surfaced through
the routing module: Cayuga County IDA (host), Auburn IDA, North Central SBDC, and
Cayuga County Development Corporation.

- `index.html` - page markup and styles
- `kb.js` - all content (single source of truth), including the `partners` routing block
- `app.js` - rendering, motion, search, on-page assistant

## Before launch — items CCIDA must confirm

- Partner agency **role descriptions** in `kb.js` `partners[]`. These are inferred from each
  agency's general type and are flagged `confirm: true`. Each partner should sign off on
  its own wording.
- Partner agency **website URLs**. Only the CCIDA URL is populated; the other three render
  a "link to be supplied" placeholder rather than an invented destination.
- Whether all four agencies have **agreed to participate** and to the routing rules.
