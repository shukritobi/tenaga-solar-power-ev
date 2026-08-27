# FazSolar — Solar & EV Consultant Landing Page

Conversion-focused static website for Fazrul Ruslan, Solar Consultant, built around the public track record of Tenaga Solar Jaya Maju and the PowerUp EV ecosystem.

## What this site does

- Personal consultant positioning for **FazSolar / Fazrul Ruslan**
- Mobile-first lead generation through WhatsApp
- Interactive 60-second solar bill screening calculator
- Solar ATAP 2026 explainer and official SEDA link
- Residential, C&I, battery / energy-efficiency and EV service sections
- Rawang case-study presentation based on FazSolar's public Threads post
- Corporate project / credibility section using Tenaga Solar's published track record
- PowerUp EV app section with Google Play and App Store links
- Contact form that sends structured lead information directly to WhatsApp
- SEO metadata + Schema.org Person markup
- No framework or build step: plain HTML, CSS and JavaScript

## Contact used

**Fazrul Ruslan**  
Solar Consultant  
WhatsApp: +6012 284 4359  
Email: fazrul.ruslan@tenagasolar.com

## Research basis

Content was cross-checked against:

- Tenaga Solar Jaya Maju official website and published project portfolio
- Tenaga Solar Company Profile 2025
- SEDA Malaysia Solar ATAP information and 2026 guidelines
- Malaysia Photovoltaic Industry Association / MPSEA member listing
- Public PowerUp EV listings on Google Play and Apple App Store
- FazSolar public Threads content supplied for the project
- Fazrul Ruslan's supplied business card

### Key verified points used in the website

- Tenaga Solar publishes 1,258+ successful projects and 24.34+ MW of PV installed.
- Tenaga Solar's current published portfolio includes residential and commercial projects such as Adinazrin, Bong Yong Ching, Mahadeevan, Lock & Key Hardware and Dalex Engineering.
- MPSEA's 2026 member listing identifies Tenaga Solar Jaya Maju Sdn Bhd as a **Full Member / EPC Contractor**.
- Solar ATAP began on **1 January 2026** and continues consumer solar after NEM, allowing self-consumption and export of surplus solar energy subject to current rules.
- PowerUp EV Malaysia is publicly listed as an EV charging application associated with the Tenaga Solar ecosystem.

## Important calculator note

The calculator is intentionally a **lead-screening estimator**, not a quotation engine. It gives a broad indicative system size and bill-offset range, then routes the user to Fazrul for an actual technical assessment. Final sizing depends on tariff, interval/load profile, roof area, shading, electrical supply, system configuration, battery strategy and applicable Solar ATAP / utility requirements.

## Deployment

This repository is ready for simple GitHub Pages branch deployment and does not require a build step.

To publish it for the first time:

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**.
4. Click **Save**.

After GitHub finishes publishing, the expected URL is:

`https://shukritobi.github.io/tenaga-solar-power-ev/`

Every later update pushed to `main` will be reflected by GitHub Pages automatically.

## Files

- `index.html` — content, semantic structure, metadata and conversion flow
- `styles.css` — responsive design system and layouts
- `script.js` — calculator, mobile navigation, WhatsApp links and lead form

## Recommended next production pass

Before moving the site to the client's primary domain, replace any remotely referenced media with approved original project files from Fazrul / Tenaga Solar, confirm the final corporate wording and certifications, connect analytics, and point the live domain to the deployed site.
