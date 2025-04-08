import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { ICustomer, IPagedResults } from '../../interfaces';
import Pagination from '../shared/Pagination';

const CustomersView = styled.div`
  padding: 20px;
`;

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

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h3`
  margin-bottom: 0;
  font-weight: 500;
  line-height: 1.2;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const CustomerRow = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const CustomerName = styled.h4`
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.2;
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

const NoOrders = styled.div`
  padding: 10px;
  font-style: italic;
`;

const NoCustomers = styled.div`
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

const Orders: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  
  const { data, isLoading, error } = useQuery<IPagedResults<ICustomer[]>>({
    queryKey: ['customers', 'orders', currentPage, pageSize],
    queryFn: async () => {
      const response = await fetch(`/api/customers/page/${(currentPage - 1) * pageSize}/${pageSize}`);
      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }
      return response.json();
    }
  });
  
  const customers = data?.results || [];
  const totalRecords = data?.totalRecords || 0;
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  if (isLoading) {
    return <Container>Loading customers and orders...</Container>;
  }
  
  if (error) {
    return <Container>Error loading customers and orders</Container>;
  }
  
  return (
    <CustomersView className="customers view indent">
      <Container>
        <Header>
          <Title>
            <Icon className="glyphicon glyphicon-folder-open"></Icon>
            Orders
          </Title>
        </Header>
        <br />
        
        <Container>
          {customers && customers.length > 0 ? (
            <>
              {customers.map((customer) => (
                <CustomerRow key={customer.id}>
                  <CustomerName>
                    {capitalize(customer.firstName)} {capitalize(customer.lastName)}
                  </CustomerName>
                  <br />
                  
                  {customer.orders && customer.orders.length > 0 ? (
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
                  ) : (
                    <NoOrders>No orders found</NoOrders>
                  )}
                </CustomerRow>
              ))}
              
              {totalRecords > 0 && (
                <Pagination 
                  totalItems={totalRecords}
                  pageSize={pageSize}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <NoCustomers>No customers found</NoCustomers>
          )}
        </Container>
      </Container>
    </CustomersView>
  );
};

export default Orders;
