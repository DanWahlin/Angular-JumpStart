import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname and __filename for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;
const inContainer = process.env.CONTAINER;
const inAzure = process.env.WEBSITE_RESOURCE_GROUP;

console.log('inContainer', inContainer);
console.log('inAzure', inAzure);
console.log('__dirname', __dirname);

// Load data from JSON files
const customers = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/customers.json'), 'utf-8'));
const states = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/states.json'), 'utf-8'));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, X-InlineCount, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});

// Serve static files if not running in a container
if (!inContainer) {
  app.use(express.static(path.join(__dirname, 'dist/angular-jumpstart')));
  console.log(`Static files served from ${path.join(__dirname, 'dist/angular-jumpstart')}`);
}

// Helper function to safely fetch a customer by ID
const getCustomerById = (id) => customers.find((customer) => customer.id === id);

// Routes
app.get('/api/customers/page/:skip/:top', (req, res) => {
  const skip = parseInt(req.params.skip, 10) || 0;
  const top = parseInt(req.params.top, 10) || 10;

  const pagedCustomers = customers.slice(skip, skip + top);
  res.setHeader('X-InlineCount', customers.length);
  res.json(pagedCustomers);
});

app.get('/api/customers', (req, res) => res.json(customers));

app.get('/api/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id, 10);
  const customer = getCustomerById(customerId);
  res.json(customer || {});
});

app.post('/api/customers', (req, res) => {
  const newCustomer = req.body;
  newCustomer.id = Math.max(...customers.map((cust) => cust.id), 0) + 1;
  newCustomer.gender = newCustomer.id % 2 === 0 ? 'female' : 'male';
  customers.push(newCustomer);
  res.json(newCustomer);
});

app.put('/api/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id, 10);
  const updatedCustomer = req.body;

  const stateMatch = states.find((state) => state.abbreviation === updatedCustomer.state?.abbreviation);
  if (stateMatch) {
    updatedCustomer.state.name = stateMatch.name;
  }

  const index = customers.findIndex((cust) => cust.id === customerId);
  if (index !== -1) {
    customers[index] = updatedCustomer;
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});

app.delete('/api/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id, 10);
  const index = customers.findIndex((cust) => cust.id === customerId);
  if (index !== -1) {
    customers.splice(index, 1);
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});

app.get('/api/orders/:id', (req, res) => {
  const customerId = parseInt(req.params.id, 10);
  const orders = customers.find((cust) => cust.customerId === customerId)?.orders || [];
  res.json(orders);
});

app.get('/api/states', (req, res) => res.json(states));

app.post('/api/auth/login', (req, res) => res.json(true)); // Simulate login
app.post('/api/auth/logout', (req, res) => res.json(true)); // Simulate logout

// Catch-all route for HTML5 history
if (!inContainer) {
  app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/angular-jumpstart/index.html'));
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});

// Open the browser (only if not in a container or Azure)
if (!inContainer && !inAzure) {
  (async () => {
    const { default: open } = await import('open');
    open(`http://localhost:${port}`);
  })();
}
