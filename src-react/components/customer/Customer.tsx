import React from 'react';
import styled from 'styled-components';
import { Link, Outlet, useParams, useMatch } from '@tanstack/react-router';

const CustomerView = styled.div`
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

const NavBar = styled.div`
  margin-bottom: 20px;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const NavLink = styled(Link)<{ active: boolean }>`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${props => props.active ? '#007bff' : '#6c757d'};
  background-color: ${props => props.active ? '#f8f9fa' : 'transparent'};
  border-radius: 0.25rem;
  
  &:hover {
    color: #007bff;
    background-color: #e9ecef;
  }
`;

const ContentContainer = styled.div`
  padding: 20px 0;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const Customer: React.FC = () => {
  const { id } = useParams({ from: '/customers/$id' });
  
  const detailsMatch = useMatch({ from: '/customers/$id/details' });
  const ordersMatch = useMatch({ from: '/customers/$id/orders' });
  const editMatch = useMatch({ from: '/customers/$id/edit' });
  
  return (
    <CustomerView className="orders view">
      <Container>
        <Header>
          <Title>
            <Icon className="glyphicon glyphicon-user"></Icon>
            Customer Information
          </Title>
        </Header>
        <br />
        
        <NavBar className="navbar">
          <NavList className="nav navbar-nav">
            <NavItem className="toolbar-item">
              <NavLink 
                to={`/customers/${id}/details`} 
                active={!!detailsMatch}
              >
                <Icon className="glyphicon glyphicon-list"></Icon>
                Customer Details
              </NavLink>
            </NavItem>
            <NavItem className="toolbar-item">
              <NavLink 
                to={`/customers/${id}/orders`} 
                active={!!ordersMatch}
              >
                <Icon className="glyphicon glyphicon-tags"></Icon>
                Customer Orders
              </NavLink>
            </NavItem>
            <NavItem className="toolbar-item">
              <NavLink 
                to={`/customers/${id}/edit`} 
                active={!!editMatch}
              >
                <Icon className="glyphicon glyphicon-edit"></Icon>
                Edit Customer
              </NavLink>
            </NavItem>
          </NavList>
        </NavBar>
        
        <ContentContainer>
          <Outlet />
          <br />
          <br />
          <BackLink to="/customers">View all Customers</BackLink>
        </ContentContainer>
      </Container>
    </CustomerView>
  );
};

export default Customer;
