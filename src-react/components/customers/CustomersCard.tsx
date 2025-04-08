import React from 'react';
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

const CardContainer = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const CardColumn = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 20px;
  
  @media (min-width: 576px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  @media (min-width: 768px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  
  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #d4d4d4;
  height: 120px;
  margin-bottom: 20px;
  position: relative;
`;

const CardHeader = styled.div`
  background-color: #027FF4;
  font-size: 14pt;
  color: white;
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


const EditIcon = styled.i`
  color: white;
  float: right;
  cursor: pointer;
`;

const CardBody = styled.div`
  padding-left: 5px;
`;

const Clearfix = styled.div`
  &::after {
    display: block;
    clear: both;
    content: "";
  }
`;

const CardBodyLeft = styled.div`
  float: left;
  margin-top: -5px;
`;

const CardBodyRight = styled.div`
  float: left;
  margin-left: 20px;
  margin-top: 2px;
`;

const CardBodyContent = styled.div`
  width: 100px;
`;

const CardImage = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 10px;
`;


const NoRecords = styled.div`
  padding: 10px;
`;

interface CustomersCardProps {
  customers: ICustomer[];
}

const CustomersCard: React.FC<CustomersCardProps> = ({ customers = [] }) => {
  const capitalize = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  const trim = (str: string): string => {
    if (!str) return '';
    return str.trim();
  };
  
  return (
    <Container>
      <CardContainer className="card-container">
        {customers.map((customer) => (
          <CardColumn key={customer.id}>
            <Card className="card">
              <CardHeader className="card-header">
                <Link 
                  to="/customers/$id/details"
                  params={{ id: customer.id.toString() }}
                  className="white"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {capitalize(customer.firstName)} {capitalize(customer.lastName)}
                </Link>
                <Link 
                  to="/customers/$id/edit"
                  params={{ id: customer.id.toString() }}
                  style={{ color: 'white' }}>
                  <EditIcon 
                    title="Edit" 
                    className="glyphicon glyphicon-edit edit-icon white"
                  />
                </Link>
              </CardHeader>
              <CardBody className="card-body">
                <Clearfix className="clearfix">
                  <CardBodyLeft className="card-body-left">
                    <a href="#" className="white">
                      <CardImage 
                        src={`images/${customer.gender?.toLowerCase()}.png`} 
                        className="card-image" 
                        alt={customer.gender}
                      />
                    </a>
                  </CardBodyLeft>
                  <CardBodyRight className="card-body-right">
                    <CardBodyContent className="card-body-content">
                      {trim(customer.city)}, {customer.state?.name}
                    </CardBodyContent>
                    <Link 
                      to="/customers/$id/orders"
                      params={{ id: customer.id.toString() }}
                    >
                      View Orders
                    </Link>
                  </CardBodyRight>
                </Clearfix>
              </CardBody>
            </Card>
          </CardColumn>
        ))}
        {!customers.length && (
          <NoRecords>
            No Records Found
          </NoRecords>
        )}
      </CardContainer>
    </Container>
  );
};

export default CustomersCard;
