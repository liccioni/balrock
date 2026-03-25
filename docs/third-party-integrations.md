# Third-Party Integrations

This site uses a small set of third-party scripts and embeds. Each integration
below is optional for core content: the landing page, concert details, social
links, booking link, and local media shell should remain available if any of
these services fail to load.

## Consent Manager

- Provider: `cdn.consentmanager.net`
- Purpose: controls consent-gated embeds and privacy preferences
- Required for core content: no
- Failure behavior: the page should still render; consent-managed embeds may
  remain inactive until the user allows them
- Privacy note: this is the primary consent layer and should remain ahead of
  analytics/bootstrap scripts
- Language note: the site is Spanish-first, so the integration pins the CMP
  language to `ES` in [`index.html`](../index.html) before the autoblocking
  script loads
- Operational note: copy for the first-layer dialog and blocked YouTube preview
  cards is managed in the consentmanager dashboard, not in React components

## Google Tag Manager

- Provider: `www.googletagmanager.com`
- Purpose: analytics and tag orchestration
- Required for core content: no
- Failure behavior: tracking is lost, but page content and navigation must keep
  working
- Privacy note: should remain subject to the active consent configuration

## Google Analytics

- Provider: `www.googletagmanager.com`
- Purpose: traffic measurement
- Required for core content: no
- Failure behavior: analytics events are skipped, but no content should depend
  on the script loading
- Privacy note: should remain subject to the active consent configuration

## YouTube No-Cookie Embeds

- Provider: `www.youtube-nocookie.com`
- Purpose: video playback in the gallery
- Required for core content: no
- Failure behavior: the page should still render headings and surrounding copy;
  video playback may be unavailable
- Privacy note: embeds are currently consent-gated through the existing lazyload
  attributes

## Gigstarter

- Provider: `gigstarter.s3.amazonaws.com` and `www.gigstarter.es`
- Purpose: booking/artist profile enhancement for the "Contrata Balrock" area
- Required for core content: no
- Failure behavior: the direct booking link and image remain available even if
  the enhancement script fails to load
- Privacy note: no critical page content should rely on the remote script
