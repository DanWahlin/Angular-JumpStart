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
- Access the application at http://localhost:8080
- The server combines Angular frontend and Express REST API backend in a single process

### Testing and Validation
- **Manual testing required**: Always test complete user scenarios after making changes
- **Login scenario**: Use any email address with any password that's at least 6 characters and contains 1 digit (e.g., `test@example.com` / `password123`)
- **Core user flows to test**:
  1. Login → Customer list → Customer details → Edit customer → Customer orders
  2. Navigate between different views (Customers, Orders, About)
  3. Test logout functionality
- **Cypress E2E tests**: `npm install cypress --save-dev` -- FAILS due to network restrictions (download.cypress.io blocked). Document this failure.
- **Unit tests**: No unit testing framework is configured. Do not attempt to run unit tests.

### Build Constraints and Network Limitations
- **External dependencies fail**: fonts.googleapis.com, Google Maps API, download.cypress.io are blocked
- **Use development builds only**: Production builds fail due to font inlining from external sources
- **Maps won't work**: Google Maps API key required and network restrictions prevent loading
- **Storybook**: Dependencies not installed by default, requires additional setup

## Docker and Containerization
- **Docker available**: `docker compose version` shows v2.38.2
- **Docker build**: `docker compose build node` -- builds Node.js API container
- **Docker build**: `docker compose build nginx` -- builds Nginx frontend container  
- **Full stack**: `docker compose up` -- runs complete containerized application
- **Docker files**: Located in `.docker/` directory
- **Container ports**: Nginx on 80, Node.js API on 8080

## Validation Requirements
- **ALWAYS manually validate changes** by running through complete end-to-end scenarios
- **Required test scenario**: Login → browse customers → view details → edit customer → view orders
- **Screenshot verification**: Take screenshots of UI changes to confirm functionality
- **API validation**: Test REST endpoints via browser network tab or manual API calls

## Project Structure and Key Areas

### Frontend (Angular 18)
```
src/
  app/
    core/                 # Core services, guards, interceptors
    customers/            # Customer management components
    login/               # Authentication components  
    orders/              # Order management components
    shared/              # Shared components, pipes, directives
```

### Backend (Node.js Express)
- `server.js` - Main Express server with REST API endpoints
- `public/data/` - JSON data files (customers.json, states.json)
- API endpoints: `/api/customers`, `/api/orders`, `/api/auth/login`, `/api/states`

### Configuration Files
- `angular.json` - Angular CLI configuration
- `package.json` - Dependencies and npm scripts
- `tsconfig.json` - TypeScript configuration
- `cypress.config.ts` - Cypress E2E test configuration (tests can't run due to network restrictions)

## Common Tasks

### Repository Root Structure
```
.
├── README.md
├── angular.json
├── package.json  
├── server.js
├── docker-compose.yml
├── .docker/
├── .github/
├── api/                 # Azure Functions alternative API
├── cypress/             # E2E tests (can't install due to network)
├── src/                 # Angular application source
└── public/              # Static assets and data files
```

### Package.json Scripts
```json
{
  "start": "node server.js",
  "build": "ng build angular-jumpstart", 
  "cypress": "concurrently \"npm start\" \"npx cypress open\"",
  "storybook": "npm run docs:json && start-storybook -p 6006"
}
```

### Known Issues and Workarounds
- **Production builds fail**: Use development builds only due to external font dependencies
- **Cypress installation fails**: Cannot install due to network restrictions on download.cypress.io
- **Google Maps not working**: API key required and external API blocked
- **No linting configured**: No ESLint, TSLint, or similar linting tools configured
- **No unit tests**: No testing framework (Jest, Karma) configured in the project

### Azure Deployment Options
- **Azure Container Apps**: Instructions provided in README.md for containerized deployment
- **Azure Functions**: Alternative API implementation in `/api` folder using Azure Functions
- **Azure Static Web Apps**: Supported deployment option mentioned in README.md

## Important Notes for Development
- **Always use development configuration** for builds to avoid external dependency failures
- **Test authentication flows** - the app has login/logout state management that affects navigation
- **Customer data is in-memory** - changes reset when server restarts
- **REST API is embedded** - single Node.js process serves both frontend and API
- **Network restrictions apply** - external CDNs and APIs are blocked in this environment