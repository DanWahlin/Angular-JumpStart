import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { 
  Router, 
  RouterProvider, 
  Route, 
  RootRoute,
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
import './index.css';

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
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

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const customersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/customers',
  component: Customers,
});

const ordersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/orders',
  component: Orders,
});

const customerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/customers/$id',
  component: Customer,
});

const customerDetailsRoute = new Route({
  getParentRoute: () => customerRoute,
  path: '/details',
  component: CustomerDetails,
});

const customerOrdersRoute = new Route({
  getParentRoute: () => customerRoute,
  path: '/orders',
  component: CustomerOrders,
});

const customerEditRoute = new Route({
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

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
