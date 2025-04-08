import React from 'react';
import styled from 'styled-components';

const ViewContainer = styled.div`
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
  margin-bottom: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 1rem;
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

const InfoIcon = styled.span`
  margin-right: 8px;
`;

const About: React.FC = () => {
  return (
    <ViewContainer className="view">
      <Container>
        <Header>
          <h3>
            <InfoIcon className="glyphicon glyphicon-info-sign" />
            About
          </h3>
        </Header>
        <br />
        <Container>
          <Row>
            <ColMd2>Created by:</ColMd2>
            <ColMd10>
              <a href="http://twitter.com/DanWahlin" target="_blank" rel="noopener noreferrer">
                Dan Wahlin
              </a>
            </ColMd10>
          </Row>
          <Row>
            <ColMd2>Blog:</ColMd2>
            <ColMd10>
              <a href="http://blog.codewithdan.com" target="_blank" rel="noopener noreferrer">
                https://blog.codewithdan.com
              </a>
            </ColMd10>
          </Row>
          <Row>
            <ColMd2>GitHub:</ColMd2>
            <ColMd10>
              <a href="https://github.com/DanWahlin/Angular-JumpStart" target="_blank" rel="noopener noreferrer">
                https://github.com/DanWahlin/Angular-JumpStart
              </a>
            </ColMd10>
          </Row>
        </Container>
      </Container>
    </ViewContainer>
  );
};

export default About;
