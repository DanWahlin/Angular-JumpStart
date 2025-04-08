import React from 'react';
import styled from 'styled-components';
import { useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { ICustomer } from '../../interfaces';

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  
  @media (min-width: 768px) {
    max-width: 720px;
  }
  
  @media (min-width: 992px) {
    max-width: 960px;
  }
  
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const OrdersTable = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  
  tr {
    &:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.075);
    }
  }
  
  td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
  
  .text-right {
    text-align: right;
  }
  
  .summary-border {
    border-top: 2px solid #dee2e6;
    font-weight: bold;
  }
`;

const CustomerName = styled.h4`
  margin-bottom: 1rem;
`;

const NoOrders = styled.div`
  padding: 20px;
  font-style: italic;
`;

const NoCustomer = styled.div`
  padding: 20px;
  text-align: center;
  font-style: italic;
`;

const capitalize = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
};

const CustomerOrders: React.FC = () => {
  const { id } = useParams({ from: '/customers/$id/orders' });
  
  const { data: customer, isLoading, error } = useQuery<ICustomer>({
    queryKey: ['customer', id],
    queryFn: async () => {
      const response = await fetch(`/api/customers/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch customer');
      }
      return response.json();
    },
    enabled: !!id
  });
  
  if (isLoading) {
    return <Container>Loading customer orders...</Container>;
  }
  
  if (error) {
    return <Container>Error loading customer orders</Container>;
  }
  
  if (!customer) {
    return (
      <Container>
        <NoCustomer>No customer found</NoCustomer>
      </Container>
    );
  }
  
  return (
    <Container>
      {customer && customer.orders && customer.orders.length > 0 ? (
        <Row>
          <CustomerName>
            Orders for {capitalize(customer.firstName)} {capitalize(customer.lastName)}
          </CustomerName>
          <br />
          <OrdersTable className="table table-striped table-hover orders-table">
            <tbody>
              {customer.orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.productName}</td>
                  <td className="text-right">{formatCurrency(order.itemCost)}</td>
                </tr>
              ))}
              <tr className="summary-border">
                <td>&nbsp;</td>
                <td className="text-right">{formatCurrency(customer.orderTotal || 0)}</td>
              </tr>
            </tbody>
          </OrdersTable>
        </Row>
      ) : customer ? (
        <Row>
          <NoOrders>No orders found</NoOrders>
        </Row>
      ) : (
        <Row>
          <NoCustomer>No customer found</NoCustomer>
        </Row>
      )}
    </Container>
  );
};

export default CustomerOrders;
