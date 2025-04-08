import React, { useState, useCallback, createContext, useContext } from 'react';
import { IUserLogin } from '../interfaces';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (userLogin: IUserLogin) => Promise<boolean>;
  logout: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState('');
  const baseUrl = '/api';
  const authUrl = baseUrl + '/auth';

  const login = useCallback(async (userLogin: IUserLogin): Promise<boolean> => {
    try {
      const response = await fetch(authUrl + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userLogin)
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      const loggedIn = await response.json();
      setIsAuthenticated(loggedIn);
      return loggedIn;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }, [authUrl]);

  const logout = useCallback(async (): Promise<boolean> => {
    try {
      const response = await fetch(authUrl + '/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      
      const loggedOut = await response.json();
      setIsAuthenticated(!loggedOut);
      return loggedOut;
    } catch (error) {
      console.error('Logout error:', error);
      return false;
    }
  }, [authUrl]);

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;
