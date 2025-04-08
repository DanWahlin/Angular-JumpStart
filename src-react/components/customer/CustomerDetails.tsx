import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

import { ICustomer } from '../../interfaces';
import Map from '../shared/Map';

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

const ColMd2 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  
  @media (min-width: 768px) {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
`;

const ColMd10 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  
  @media (min-width: 768px) {
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
`;

const ColMd12 = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  
  @media (min-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const DetailsImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const CustomerName = styled.h4`
  margin-bottom: 1rem;
`;

const MapContainer = styled.div`
  margin-top: 20px;
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

const CustomerDetails: React.FC = () => {
  const { id } = useParams({ from: '/customers/$id/details' });
  const [mapEnabled, setMapEnabled] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  
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
  
  useEffect(() => {
    if (customer && customer.latitude && !mapLoaded) {
      setMapEnabled(true);
      setMapLoaded(true);
    }
  }, [customer, mapLoaded]);
  
  if (isLoading) {
    return <Container>Loading customer details...</Container>;
  }
  
  if (error) {
    return <Container>Error loading customer details</Container>;
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
      <Row>
        <ColMd2>
          <DetailsImage 
            src={`images/${customer.gender?.toLowerCase()}.png`} 
            className="details-image" 
            title="customer picture" 
            alt={customer.gender}
          />
        </ColMd2>
        <ColMd10>
          <CustomerName>
            {capitalize(customer.firstName)} {capitalize(customer.lastName)}
          </CustomerName>
          <br />
          {customer.address}
          <br />
          {customer.city}, {customer.state?.name}
        </ColMd10>
      </Row>
      <br /><br />
      <Row>
        <ColMd12>
          <MapContainer>
            {mapEnabled && (
              <Map 
                latitude={customer.latitude}
                longitude={customer.longitude}
                zoom={10}
                enabled={true}
                markerText={`<h3>${customer.firstName} ${customer.lastName}</h3>${customer.city}, ${customer.state?.name}`}
              />
            )}
          </MapContainer>
        </ColMd12>
      </Row>
    </Container>
  );
};

export default CustomerDetails;
