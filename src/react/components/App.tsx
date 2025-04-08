import React from 'react';
import styled from 'styled-components';
import { Outlet } from '@tanstack/react-router';

import Navbar from './core/Navbar';
import Growler from './core/Growler';
import Modal from './core/Modal';
import Overlay from './core/Overlay';

const MainContainer = styled.main`
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

const Spinner = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
  
  @keyframes spinner-border {
    to { transform: rotate(360deg); }
  }
`;

const App: React.FC = () => {
  return (
    <>
      <MainContainer className="container">
        <Navbar />
        <Outlet />
        <Growler position="top-right" timeout={2000} />
        <Modal />
        <Overlay delay={300}>
          <Spinner className="spinner" />&nbsp;&nbsp;&nbsp;Loading
        </Overlay>
      </MainContainer>
      <br /><br />
    </>
  );
};

export default App;
