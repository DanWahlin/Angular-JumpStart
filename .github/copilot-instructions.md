# Angular JumpStart with TypeScript

Angular JumpStart is an Angular 18 TypeScript application with a Node.js Express server backend that demonstrates key Angular concepts including routing, components, services, forms, and HTTP client usage.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build - NEVER CANCEL Long Operations
- Install dependencies: `npm install` -- takes 40 seconds. NEVER CANCEL. Set timeout to 90+ seconds.
- **Development build**: `npx ng build angular-jumpstart --configuration development` -- takes 12 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- **Production build**: `npx ng build angular-jumpstart` -- FAILS due to network restrictions (fonts.googleapis.com blocked). Document this failure.
- Start the development server: `npm start` -- starts immediately, serves on http://localhost:8080

### Running the Application
- ALWAYS run the development build first: `npx ng build angular-jumpstart --configuration development`
- ALWAYS start the server: `npm start` 
````instructions
# Angular JumpStart — quick AI agent guide

This repository is an Angular 20 app with a small Node/Express API (served from `server.js`). The frontend (Angular) and a simple REST API (reads/writes JSON in `public/data/`) run together in dev. Use this file as the single source of truth for quick, actionable guidance.

Essential commands
- Install deps (repo root): `npm install` — allow 60–90s.
- Dev build (required before running server): `npx ng build angular-jumpstart --configuration development`.
- Start server: `npm start` (serves frontend + API at http://localhost:8080).
- Docker: `docker compose build node && docker compose build nginx` and `docker compose up` (see `.docker/`).

Why this structure
- Single-process dev: `server.js` serves static Angular files and exposes API endpoints that read from `public/data/*.json`. Edits to JSON are in-memory when using the Express server; the server persists changes in memory only.

Key files & locations (quick map)
- Frontend: `src/` (main app in `src/app/`).
- API (express): `server.js` (root) — endpoints: `/api/customers`, `/api/customers/:id`, `/api/orders/:id`, `/api/states`, `/api/auth/*`.
- Static data: `public/data/customers.json`, `public/data/states.json` (source of truth for mock data).
- Azure Functions alternative API: `api/` (folder with individual function handlers) — used in some deployments.

Project-specific patterns an AI should follow
- State shape: customer records in the production-like API store `state` as an abbreviation string (e.g., "AZ"); some mock sources return `state` as an object {abbreviation,name}. Normalize when reading or writing to avoid select/ngModel mismatches. See `src/app/customer/customer-edit/customer-edit.component.ts` and `src/app/shared/mocks.ts` for examples.
- Template loops: the codebase uses a micro-template-style `@for (...) { ... }` pattern in HTML files. Treat these as Angular template loops and inspect local usages (e.g., `@for (state of states; track state.abbreviation)` in `customer-edit.component.html`).
- Forms: template-driven forms are used across the app (FormsModule imported in components). Bindings are often primitive (strings). Prefer `(ngModel)` with primitive types for selects/options (use `ngValue` when binding objects).
- Change detection: some list components use OnPush (e.g., `CustomersGridComponent`), so avoid mutating arrays in-place when expecting automatic UI refresh — replace arrays when sorting/filtering or call the helper services used in the repo.

Developer workflows & gotchas
- Always run the development build before `npm start`. Production build often fails here because external fonts are blocked by the environment.
- E2E: Cypress tests exist but cannot be installed here due to network restrictions (download.cypress.io). Treat E2E as manual verification in this environment.
- Maps/External APIs: Google Maps integration is present but disabled by default (API key + network required). Don’t attempt to fetch external map assets in a restricted environment.

Data & API contracts (important)
- Customer JSON shape (public/data/customers.json): id, firstName, lastName, gender, address, city, state (abbreviation string in runtime API), orders, latitude, longitude.
- State JSON shape (public/data/states.json): { id, name, abbreviation } — components expect `abbreviation` when populating selects.

Where to look when things break
- Forms/selects: `src/app/customer/customer-edit/` (TS + HTML) — common source of bugs when state is object vs string.
- Data fetching: `src/app/core/services/data.service.ts` (all API calls live here).
- Server behavior: `server.js` (root) — see how in-memory updates work and how the express endpoints transform data (note: PUT handler expects a particular shape).

Small, safe edits AI agents can make autonomously
- Normalize `customer.state` to abbreviation on read (safe, local change) — example already in `customer-edit.component.ts`.
- Use `[ngValue]` for option binding when model values are primitives, and add a disabled placeholder option.

What to never change without human consent
- Production build scripts and network/CDN references (these fail locally and require network changes).
- Anything in `.docker/` or Azure deployment scripts unless you confirm deployment target and credentials.

If you need more context
- Inspect `src/app/shared/interfaces.ts` to understand types used across the app.
- Search for `getStates()` and `getCustomer()` in the codebase to see calling sites and shape expectations.

Feedback request
- If any section is unclear or you want more examples (e.g., exact component files to edit for a specific task), tell me which area and I’ll expand this file.