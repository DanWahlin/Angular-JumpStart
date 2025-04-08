import React, { useState, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { ICustomer, IPagedResults } from '../../interfaces';
import FilterTextbox from '../shared/FilterTextbox';
import CustomersCard from './CustomersCard';
import CustomersGrid from './CustomersGrid';
import Pagination from '../shared/Pagination';

const Map = lazy(() => import('../shared/Map'));

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

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
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

const NavLink = styled.a<{ active?: boolean }>`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${props => props.active ? '#007bff' : '#6c757d'};
  background-color: ${props => props.active ? '#f8f9fa' : 'transparent'};
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:hover {
    color: #007bff;
    background-color: #e9ecef;
  }
`;

const RouterNavLink = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #6c757d;
  border-radius: 0.25rem;
  
  &:hover {
    color: #007bff;
    background-color: #e9ecef;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
`;

const useLogger = () => {
  const log = (message: any) => {
    console.log(message);
  };
  
  return { log };
};

const useFilterService = () => {
  const filter = <T extends object>(items: T[], data: string, props: string[]): T[] => {
    return items.filter(item => {
      let match = false;
      for (const prop of props) {
        const value = getPropValue(item, prop);
        if (value && value.toString().toUpperCase().indexOf(data) > -1) {
          match = true;
          break;
        }
      }
      return match;
    });
  };
  
  const getPropValue = (obj: any, path: string): any => {
    return path.split('.').reduce((prev, curr) => {
      return prev ? prev[curr] : null;
    }, obj);
  };
  
  return { filter };
};

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}

const Customers: React.FC = () => {
  const [displayMode, setDisplayMode] = useState<DisplayModeEnum>(DisplayModeEnum.Card);
  const [filterText, setFilterText] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;
  
  const { log } = useLogger();
  const { filter } = useFilterService();
  
  const { data, isLoading, error } = useQuery<IPagedResults<ICustomer[]>>({
    queryKey: ['customers', currentPage, pageSize],
    queryFn: async () => {
      const response = await fetch(`/api/customers/page/${(currentPage - 1) * pageSize}/${pageSize}`);
      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }
      const data = await response.json();
      log(`getCustomersPage() retrieved customers for page: ${currentPage}`);
      return data;
    }
  });
  
  const customers = data?.results || [];
  const totalRecords = data?.totalRecords || 0;
  
  const filteredCustomers = React.useMemo(() => {
    if (filterText && customers.length) {
      const upperFilter = filterText.toUpperCase();
      const props = ['firstName', 'lastName', 'city', 'state.name'];
      return filter(customers, upperFilter, props);
    }
    return customers;
  }, [customers, filterText, filter]);
  
  const handleDisplayModeChange = (mode: DisplayModeEnum) => {
    setDisplayMode(mode);
  };
  
  const handleFilterChange = (text: string) => {
    setFilterText(text);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  if (isLoading) {
    return <Container>Loading customers...</Container>;
  }
  
  if (error) {
    return <Container>Error loading customers</Container>;
  }
  
  return (
    <CustomersView className="customers view indent">
      <Container>
        <Header>
          <Title>
            <Icon className="glyphicon glyphicon-user"></Icon>
            Customers
          </Title>
        </Header>
        <br />
        
        <Row>
          <Column>
            <NavBar className="navbar">
              <NavList className="nav navbar-nav">
                <NavItem className="toolbar-item">
                  <NavLink 
                    onClick={() => handleDisplayModeChange(DisplayModeEnum.Card)}
                    active={displayMode === DisplayModeEnum.Card}
                  >
                    <Icon className="glyphicon glyphicon-th-large"></Icon> Card View
                  </NavLink>
                </NavItem>
                <NavItem className="toolbar-item">
                  <NavLink 
                    onClick={() => handleDisplayModeChange(DisplayModeEnum.Grid)}
                    active={displayMode === DisplayModeEnum.Grid}
                  >
                    <Icon className="glyphicon glyphicon-align-justify"></Icon> List View
                  </NavLink>
                </NavItem>
                <NavItem className="toolbar-item">
                  <NavLink 
                    onClick={() => handleDisplayModeChange(DisplayModeEnum.Map)}
                    active={displayMode === DisplayModeEnum.Map}
                  >
                    <Icon className="glyphicon glyphicon-map-marker"></Icon> Map View
                  </NavLink>
                </NavItem>
                <NavItem className="toolbar-item">
                  <RouterNavLink to="/customers/0/edit">
                    <Icon className="glyphicon glyphicon-plus"></Icon> New Customer
                  </RouterNavLink>
                </NavItem>
              </NavList>
              <FilterContainer className="navbar-right">
                <FilterTextbox onFilterChange={handleFilterChange} />
              </FilterContainer>
            </NavBar>
          </Column>
        </Row>
        
        {displayMode === DisplayModeEnum.Card && (
          <CustomersCard customers={filteredCustomers} />
        )}
        
        {displayMode === DisplayModeEnum.Grid && (
          <CustomersGrid customers={filteredCustomers} />
        )}
        
        {displayMode === DisplayModeEnum.Map && (
          <MapContainer>
            <Suspense fallback={<div>Loading map...</div>}>
              <Map 
                zoom={2}
                enabled={true}
                dataPoints={filteredCustomers}
              />
            </Suspense>
          </MapContainer>
        )}
        
        <Pagination 
          totalItems={totalRecords}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </Container>
    </CustomersView>
  );
};

export default Customers;
