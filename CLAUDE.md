# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular JumpStart is an Angular 19 TypeScript application with a Node.js Express server backend that demonstrates key Angular concepts including routing, components, services, forms, and HTTP client usage.

## Essential Commands

### Development Workflow
```bash
# Install dependencies (takes ~40 seconds - set timeout to 90+ seconds)
npm install

# Development build (takes ~12 seconds - set timeout to 60+ seconds)
npx ng build angular-jumpstart --configuration development

# Start server (serves on http://localhost:8080)
npm start
```

### Docker Commands
```bash
# Build containers
docker-compose build node    # Node.js API container
docker-compose build nginx   # Nginx frontend container
docker-compose up           # Run complete containerized application
```

### Other Commands
```bash
# Cypress E2E tests (requires manual cypress installation first)
npm run cypress
npm run cypress:headless

# Storybook (requires additional setup)
npm run storybook
```

## Architecture

### Frontend Structure
- **src/app/core/** - Core services (auth, data, utilities), guards, interceptors, and shared components (navbar, modal, growler)
- **src/app/customers/** - Customer list views (card/grid), handles customer display and filtering
- **src/app/customer/** - Individual customer functionality (details, edit, orders), with route guards
- **src/app/login/** - Authentication component with form validation
- **src/app/orders/** - Order management and display
- **src/app/shared/** - Reusable components (filter-textbox, pagination, map), directives, pipes, and interfaces

### Backend Structure
- **server.js** - Express server with REST API endpoints, serves both Angular app and API
- **public/data/** - JSON data files (customers.json, states.json) used as in-memory database
- **api/** - Azure Functions alternative API implementation

### Key API Endpoints
- `/api/customers` - Customer CRUD operations with pagination support
- `/api/orders` - Order retrieval
- `/api/auth/login` - Authentication (accepts any email with 6+ char password containing 1 digit)
- `/api/auth/logout` - Session termination
- `/api/states` - US states data

## Important Implementation Details

### Authentication
- Login accepts any email address with password that's at least 6 characters and contains 1 digit
- Uses HTTP interceptor for auth token management
- Route guards protect customer edit functionality

### Data Management
- Customer data is in-memory - changes reset when server restarts
- Supports pagination, sorting, and filtering
- Uses RxJS observables for async operations

### Routing
- Lazy loading for customer module
- Child routes for customer details/edit/orders
- Custom preload strategy for modules

### Forms
- Template-driven forms in login component
- Reactive forms in customer edit component
- Custom validation service for form validation

## Testing Requirements

Always manually test complete user flows after making changes:
1. Login → Customer list → Customer details → Edit customer → Customer orders
2. Navigate between different views (Customers, Orders, About)
3. Test logout functionality
4. Verify pagination and filtering work correctly

## Known Limitations

### Build Constraints
- **Production builds may fail** due to external font dependencies - use development configuration
- **No linting configured** - no ESLint or TSLint setup
- **No unit tests** - no testing framework configured

### External Dependencies
- Google Maps requires API key in `src/app/shared/map/map.component.ts`
- External CDNs may be blocked in some environments

### Development Notes
- Changes to customer data are not persisted (in-memory only)
- REST API is embedded in the same Node.js process as the frontend server
- The application uses Angular 19 with standalone components where applicable

## Code Conventions

- Follow existing Angular patterns and conventions in the codebase
- Use TypeScript strict mode conventions
- Maintain consistent component structure (HTML template, TypeScript component, CSS styles)
- Use RxJS observables for async operations
- Apply Angular reactive patterns for state management
- Follow existing service injection patterns