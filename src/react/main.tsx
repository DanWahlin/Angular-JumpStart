import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { 
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider, 
  Link,
  Outlet
} from '@tanstack/react-router';

import App from './components/App';
import About from './components/about/About';
import Login from './components/login/Login';
import Customers from './components/customers/Customers';
import Customer from './components/customer/Customer';
import CustomerDetails from './components/customer/CustomerDetails';
import CustomerOrders from './components/customer/CustomerOrders';
import CustomerEdit from './components/customer/CustomerEdit';
import Orders from './components/orders/Orders';
import { AuthProvider } from './hooks/useAuth';
import './index.css';

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div className="view">
      <div className="container">
        <h1>Welcome to Customer Manager</h1>
        <p>This application provides the following features:</p>
        <ul>
          <li>A configurable dashboard</li>
          <li>Manage customers</li>
          <li>Manage orders</li>
        </ul>
        <br />
        <Link to="/customers" className="btn btn-primary">View Customers</Link>
      </div>
    </div>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const customersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/customers',
  component: Customers,
});

const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/orders',
  component: Orders,
});

const customerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/customers/$id',
  component: Customer,
});

const customerDetailsRoute = createRoute({
  getParentRoute: () => customerRoute,
  path: '/details',
  component: CustomerDetails,
});

const customerOrdersRoute = createRoute({
  getParentRoute: () => customerRoute,
  path: '/orders',
  component: CustomerOrders,
});

const customerEditRoute = createRoute({
  getParentRoute: () => customerRoute,
  path: '/edit',
  component: CustomerEdit,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  loginRoute,
  customersRoute,
  ordersRoute,
  customerRoute.addChildren([
    customerDetailsRoute,
    customerOrdersRoute,
    customerEditRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
