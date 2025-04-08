import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from '@tanstack/react-router';

import { useAuth } from '../../hooks/useAuth';
import { useGrowlerService, GrowlerMessageType } from './Growler';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #f8f8f8;
  border-color: #e7e7e7;
  border-width: 0 0 1px;
  border-style: solid;
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

const NavbarHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const NavbarToggle = styled.button`
  position: relative;
  padding: 9px 10px;
  margin-right: 15px;
  background-color: transparent;
  background-image: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const IconBar = styled.span`
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: #888;
  
  & + & {
    margin-top: 4px;
  }
`;

const NavbarBrand = styled(Link)`
  float: left;
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
  text-decoration: none;
  color: #777;
  display: flex;
  align-items: center;
  
  &:hover, &:focus {
    text-decoration: none;
    color: #5e5e5e;
  }
`;

const BrandImage = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const AppTitle = styled.span`
  font-weight: bold;
`;

const NavbarCollapse = styled.div<{ isCollapsed: boolean }>`
  width: 100%;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  @media (max-width: 767px) {
    display: ${props => props.isCollapsed ? 'none' : 'block'};
    overflow-y: auto;
    max-height: 340px;
    clear: both;
  }
  
  @media (min-width: 768px) {
    width: auto;
    border-top: 0;
    box-shadow: none;
    display: flex !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
`;

const NavbarNav = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  
  @media (min-width: 768px) {
    flex-direction: row;
    margin-right: auto;
  }
`;

const NavItem = styled.li<{ active?: boolean }>`
  position: relative;
  display: block;
  
  @media (min-width: 768px) {
    float: left;
  }
  
  ${props => props.active && `
    background-color: #e7e7e7;
  `}
`;

const NavLink = styled(Link)`
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #777;
  
  &:hover, &:focus {
    text-decoration: none;
    color: #333;
    background-color: transparent;
  }
  
  &.active {
    color: #555;
    background-color: #e7e7e7;
  }
`;

const NavButton = styled.a`
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #777;
  cursor: pointer;
  
  &:hover, &:focus {
    text-decoration: none;
    color: #333;
    background-color: transparent;
  }
`;

const Navbar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [loginLogoutText, setLoginLogoutText] = useState('Login');
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { growl } = useGrowlerService();
  
  useEffect(() => {
    setLoginLogoutText(isAuthenticated ? 'Logout' : 'Login');
    
  }, [isAuthenticated]);
  
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const loginOrOut = async () => {
    if (isAuthenticated) {
      try {
        const success = await logout();
        if (success) {
          setLoginLogoutText('Login');
          growl('Logged Out', GrowlerMessageType.Info);
          navigate({ to: '/customers' });
        }
      } catch (err) {
        console.error('Logout error:', err);
      }
    } else {
      redirectToLogin();
    }
  };
  
  const redirectToLogin = () => {
    navigate({ to: '/login' });
  };
  
  return (
    <NavbarContainer className="navbar navbar-inner navbar-fixed-top">
      <Container>
        <NavbarHeader>
          <NavbarToggle 
            type="button" 
            className="navbar-toggle" 
            onClick={toggleNavbar}
          >
            <SrOnly>Toggle navigation</SrOnly>
            <IconBar className="icon-bar" />
            <IconBar className="icon-bar" />
            <IconBar className="icon-bar" />
          </NavbarToggle>
          
          <NavbarBrand to="/customers" className="navbar-brand">
            <BrandImage src="images/people.png" alt="logo" />
            <AppTitle className="app-title">Customer Manager</AppTitle>
          </NavbarBrand>
          
          <NavbarCollapse 
            isCollapsed={isCollapsed} 
            className="navbar-collapse" 
            data-collapse={isCollapsed}
          >
            <NavbarNav className="nav navbar-nav nav-pills navBarPadding">
              <NavItem>
                <NavLink to="/customers" activeProps={{ className: 'active' }}>
                  Customers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/orders" activeProps={{ className: 'active' }}>
                  Orders
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" activeProps={{ className: 'active' }}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavButton 
                  onClick={loginOrOut} 
                  data-cy="login-logout"
                >
                  {loginLogoutText}
                </NavButton>
              </NavItem>
            </NavbarNav>
          </NavbarCollapse>
        </NavbarHeader>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
