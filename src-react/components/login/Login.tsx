import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useNavigate } from '@tanstack/react-router';

import { useGrowlerService, GrowlerMessageType } from '../core/Growler';
import { useAuth } from '../../hooks/useAuth';

interface IUserLogin {
  email: string;
  password: string;
}

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

const LockIcon = styled.span`
  margin-right: 8px;
`;

const LoginForm = styled.form`
  margin-bottom: 20px;
`;

const LoginContainer = styled.div`
  padding: 15px;
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

const FormControl = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const AlertDanger = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-top: 0.5rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;

const SuccessButton = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #28a745;
  border: 1px solid #28a745;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, 
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }
  
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
  }
  
  &:disabled {
    opacity: 0.65;
    pointer-events: none;
    background-color: #6c757d;
    border-color: #6c757d;
  }
`;

const StatusRow = styled.div`
  margin-top: 1rem;
`;

const ErrorLabel = styled.div`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #dc3545;
`;

const ThumbsDownIcon = styled.span`
  margin-right: 5px;
`;

const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string) => {
  return password.length >= 6 && /\d/.test(password);
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IUserLogin>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });
  
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { growl } = useGrowlerService();
  const { login } = useAuth();
  
  const onSubmit = async (data: IUserLogin) => {
    try {
      const success = await login(data);
      
      if (success) {
        growl('Logged in', GrowlerMessageType.Info);
        
        navigate({ to: '/customers' });
      } else {
        const loginError = 'Unable to login';
        setErrorMessage(loginError);
        growl(loginError, GrowlerMessageType.Danger);
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMessage('An error occurred during login');
      growl('Login error', GrowlerMessageType.Danger);
    }
  };
  
  return (
    <ViewContainer className="view">
      <Container>
        <Header>
          <h3>
            <LockIcon className="glyphicon glyphicon-lock" />
            Login
          </h3>
        </Header>
        <br />
        <LoginForm onSubmit={handleSubmit(onSubmit)} className="login-form" noValidate>
          <LoginContainer className="login">
            <Row>
              <ColMd2>
                Email:
              </ColMd2>
              <ColMd10>
                <FormControl
                  title="email"
                  type="email"
                  {...register('email', {
                    required: true,
                    validate: validateEmail
                  })}
                />
                {errors.email && (
                  <AlertDanger data-cy="email-error" className="alert alert-danger">
                    A valid email address is required
                  </AlertDanger>
                )}
              </ColMd10>
            </Row>
            <br />
            <Row>
              <ColMd2>
                Password:
              </ColMd2>
              <ColMd10>
                <FormControl
                  title="password"
                  type="password"
                  {...register('password', {
                    required: true,
                    validate: validatePassword
                  })}
                />
                {errors.password && (
                  <AlertDanger data-cy="password-error" className="alert alert-danger">
                    Password is required (6 or more characters with at least one number)
                  </AlertDanger>
                )}
              </ColMd10>
            </Row>
            <br />
            <Row>
              <ColMd12>
                <SuccessButton 
                  type="submit" 
                  className="btn btn-success" 
                  disabled={!isValid}
                >
                  Login
                </SuccessButton>
              </ColMd12>
            </Row>
            <br />
            <StatusRow className="statusRow">
              <br />
              {errorMessage && (
                <ErrorLabel className="label label-important">
                  <ThumbsDownIcon className="glyphicon glyphicon-thumbs-down icon-white" />
                  Error: {errorMessage}
                </ErrorLabel>
              )}
            </StatusRow>
          </LoginContainer>
        </LoginForm>
      </Container>
    </ViewContainer>
  );
};

export default Login;
