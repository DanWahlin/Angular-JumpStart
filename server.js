import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

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
  app.use(express.static(path.join(__dirname, 'dist/angular-jumpstart/browser')));
  console.log(`Static files served from ${path.join(__dirname, 'dist/angular-jumpstart/browser')}`);
}

// Helper function to safely fetch a customer by ID
const getCustomerById = (id) => customers.find((customer) => customer.id === id);

// Routes
app.get('/api/customers/page', (req, res) => {
  const skip = parseInt(req.query.skip, 10) || 0;
  const top = parseInt(req.query.top, 10) || 10;

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
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist/angular-jumpstart/browser/index.html'));
  });
}

// Helper function to check if port is in use
const checkPortInUse = (port) => {
  return new Promise((resolve) => {
    const execAsync = promisify(exec);
    execAsync(`lsof -i :${port}`)
      .then((result) => {
        // Port is in use if lsof returns results
        resolve(result.stdout.trim().length > 0);
      })
      .catch(() => {
        // lsof command failed, assume port is free
        resolve(false);
      });
  });
};

// Helper function to kill processes on port
const killPortProcesses = (port) => {
  return new Promise((resolve) => {
    const execAsync = promisify(exec);
    execAsync(`lsof -t -i :${port}`)
      .then((result) => {
        const pids = result.stdout.trim().split('\n').filter(pid => pid);
        if (pids.length > 0) {
          console.log(`Found existing processes on port ${port}: ${pids.join(', ')}`);
          return execAsync(`kill ${pids.join(' ')}`);
        }
      })
      .then(() => {
        console.log(`Cleared port ${port}`);
        resolve();
      })
      .catch(() => {
        // Kill command failed, continue anyway
        resolve();
      });
  });
};

// Start the server with port cleanup
const startServer = async () => {
  const portInUse = await checkPortInUse(port);
  
  if (portInUse) {
    console.log(`Port ${port} is already in use. Attempting to clear it...`);
    await killPortProcesses(port);
    // Wait a moment for the port to be freed
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is still in use. Please manually stop other processes or use a different port.`);
      process.exit(1);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });
};

startServer();

// Open the browser (only if not in a container or Azure)
if (!inContainer && !inAzure) {
  (async () => {
    const { default: open } = await import('open');
    open(`http://localhost:${port}`);
  })();
}
