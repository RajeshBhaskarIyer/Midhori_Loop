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
