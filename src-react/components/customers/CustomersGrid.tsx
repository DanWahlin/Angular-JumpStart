import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from '@tanstack/react-router';

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

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  
  div {
    padding-left: 0px;
  }
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  
  @media (min-width: 768px) {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f8f9fa;
`;

const TableHeaderCell = styled.th<{ sortable?: boolean }>`
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  text-align: left;
  
  ${props => props.sortable && `
    cursor: pointer;
    
    &:hover {
      background-color: #e9ecef;
    }
    
    &::after {
      content: "\\2195";
      margin-left: 5px;
      font-size: 0.8em;
    }
  `}
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
`;

const TableCell = styled.td`
  padding: 0.75rem;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
`;

const GridImage = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 10px;
`;

interface CustomersGridProps {
  customers: ICustomer[];
}

const CustomersGrid: React.FC<CustomersGridProps> = ({ customers = [] }) => {
  const [sortedCustomers, setSortedCustomers] = useState<ICustomer[]>(customers);
  const [sortColumn, setSortColumn] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  const capitalize = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  const trim = (str: string): string => {
    if (!str) return '';
    return str.trim();
  };
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };
  
  const getPropertyValue = (obj: any, path: string) => {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null;
    }, obj);
  };
  
  const sort = (prop: string) => {
    const isAsc = sortColumn === prop && sortDirection === 'asc';
    const direction = isAsc ? 'desc' : 'asc';
    
    const sorted = [...customers].sort((a, b) => {
      const aVal = getPropertyValue(a, prop);
      const bVal = getPropertyValue(b, prop);
      
      if (aVal === bVal) return 0;
      
      const comparison = aVal > bVal ? 1 : -1;
      return direction === 'desc' ? comparison * -1 : comparison;
    });
    
    setSortedCustomers(sorted);
    setSortColumn(prop);
    setSortDirection(direction);
  };
  
  React.useEffect(() => {
    setSortedCustomers(customers);
  }, [customers]);
  
  return (
    <Container>
      <GridContainer className="grid-container">
        <Column>
          <TableContainer>
            <Table className="table table-striped table-hover">
              <TableHead>
                <tr>
                  <TableHeaderCell>&nbsp;</TableHeaderCell>
                  <TableHeaderCell sortable onClick={() => sort('firstName')}>
                    First Name
                  </TableHeaderCell>
                  <TableHeaderCell sortable onClick={() => sort('lastName')}>
                    Last Name
                  </TableHeaderCell>
                  <TableHeaderCell sortable onClick={() => sort('address')}>
                    Address
                  </TableHeaderCell>
                  <TableHeaderCell sortable onClick={() => sort('city')}>
                    City
                  </TableHeaderCell>
                  <TableHeaderCell sortable onClick={() => sort('state.name')}>
                    State
                  </TableHeaderCell>
                  <TableHeaderCell sortable onClick={() => sort('orderTotal')}>
                    Order Total
                  </TableHeaderCell>
                  <TableHeaderCell>&nbsp;</TableHeaderCell>
                </tr>
              </TableHead>
              <TableBody>
                {sortedCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <GridImage 
                        src={`images/${customer.gender?.toLowerCase()}.png`} 
                        className="grid-image" 
                        alt="Customer Image" 
                      />
                    </TableCell>
                    <TableCell>
                      <Link 
                        to="/customers/$id/details"
                        params={{ id: customer.id.toString() }}
                      >
                        {capitalize(customer.firstName)}
                      </Link>
                    </TableCell>
                    <TableCell>{capitalize(customer.lastName)}</TableCell>
                    <TableCell>{customer.address}</TableCell>
                    <TableCell>{trim(customer.city)}</TableCell>
                    <TableCell>{customer.state?.name}</TableCell>
                    <TableCell>{formatCurrency(customer.orderTotal || 0)}</TableCell>
                    <TableCell>
                      <Link 
                        to="/customers/$id/orders"
                        params={{ id: customer.id.toString() }}
                      >
                        View Orders
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
                {!sortedCustomers.length && (
                  <TableRow>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell colSpan={7}>No Records Found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Column>
      </GridContainer>
    </Container>
  );
};

export default CustomersGrid;
