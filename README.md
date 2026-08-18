# Midhori Loop — Demo Application

This repository contains a small demo version of the Midhori Loop UI. The demo is not a production app — it's a lightweight, in-browser interactive prototype that uses `localStorage` to persist demo state (signup requests, partners, materials, certificates).

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open the app in your browser at the address Vite prints (usually `http://localhost:5173`).

## Demo flows

- Use the **Signup** page to submit a business signup request.
- Go to **Admin** to approve pending requests (approving will add the business as a demo partner).
- Use **Dashboard** to view material tracking and generate demo certificates for delivered items.
- Use **Certification** to view and download issued demo certificates.

## Resetting demo data

To clear demo state and start over, open the browser DevTools console and run:

```js
localStorage.removeItem('midhori_demo_state')
location.reload()
```

## Notes

- The demo uses `localStorage` only; no backend is required.
- The `src/demoData.ts` file contains the demo data helpers.
# Midhori Loop MVP

Midhori Loop is a women-led sustainability platform building a business-to-recycling-unit network. This MVP includes a landing website, material tracking dashboard, recycling certification page, and initial B2B signup and admin interfaces.

## Project structure

- `src/` — React application source
- `src/components/` — shared UI components
- `src/routes/` — page routes for the website and dashboard
- `src/styles.css` — global styling

## How to run

1. Install Node.js (recommended version 20.x or newer).
2. Open a terminal in `c:\Users\Admin\Desktop\Projects\Midhori_Loop`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL shown in the terminal, usually `http://localhost:5173`.

> If `npm` is not recognized, install Node.js from https://nodejs.org/ and restart your terminal.

## Available pages

- `/` — Home landing page
- `/dashboard` — Tracking dashboard
- `/certification` — Recycling certification overview
- `/contact` — Contact information
- `/signup` — B2B signup flow for businesses
- `/admin` — Admin dashboard for material and certification management

## MVP features

- Business and recycling unit connection model
- Material tracking dashboard with status and ETA
- Certification overview for verified materials
- B2B signup form for onboarding new businesses
- Admin dashboard to manage collections, partners, and certifications

## Future enhancements

- Full backend integration for tracking updates and certification issuance
- Authentication for business and admin users
- B2C user onboarding and pickup scheduling
- Carbon credit reporting and ESG analytics
- Analytics dashboards for recycling performance
