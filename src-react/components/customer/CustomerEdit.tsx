import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from '@tanstack/react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, Controller } from 'react-hook-form';

import { ICustomer, IState } from '../../interfaces';
import { useGrowlerService, GrowlerMessageType } from '../../components/core/Growler';
import { useModalService } from '../../components/core/Modal';

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

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input<{ isValid: boolean; isDirty: boolean }>`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  ${props => props.isDirty && props.isValid && `
    border-left: 5px solid #42A948;
  `}
  
  ${props => props.isDirty && !props.isValid && `
    border-left: 5px solid #a94442;
  `}
`;

const Select = styled.select<{ isValid: boolean; isDirty: boolean }>`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  ${props => props.isDirty && props.isValid && `
    border-left: 5px solid #42A948;
  `}
  
  ${props => props.isDirty && !props.isValid && `
    border-left: 5px solid #a94442;
  `}
`;

const ErrorMessage = styled.div`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
`;

const AlertDanger = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;

const AlertWarning = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const SuccessButton = styled(Button)`
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  
  &:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }
  
  &:disabled {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }
`;

const DangerButton = styled(Button)`
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
  
  &:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
  }
`;

const DefaultButton = styled(Button)`
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  
  &:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
`;

const useLogger = () => {
  const log = (message: any) => {
    console.error('Error:', message);
  };
  
  return { log };
};

const CustomerEdit: React.FC = () => {
  const { id } = useParams({ from: '/customers/$id/edit' });
  const customerId = id ? parseInt(id) : 0;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { growl } = useGrowlerService();
  const modalService = useModalService();
  const { log } = useLogger();
  
  const [operationText, setOperationText] = useState('Insert');
  const [deleteMessageEnabled, setDeleteMessageEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formDirty, setFormDirty] = useState(false);
  
  const { register, handleSubmit, control, reset, formState: { errors, isDirty, isValid } } = useForm<ICustomer>({
    mode: 'onBlur',
    defaultValues: {
      id: 0,
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      city: '',
      state: {
        abbreviation: '',
        name: ''
      }
    }
  });
  
  const { data: states = [] } = useQuery<IState[]>({
    queryKey: ['states'],
    queryFn: async () => {
      const response = await fetch('/api/states');
      if (!response.ok) {
        throw new Error('Failed to fetch states');
      }
      return response.json();
    }
  });
  
  const { data: customer } = useQuery<ICustomer>({
    queryKey: ['customer', customerId],
    queryFn: async () => {
      const response = await fetch(`/api/customers/${customerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch customer');
      }
      return response.json();
    },
    enabled: customerId !== 0
  });
  
  useEffect(() => {
    if (customer) {
      reset(customer);
      setOperationText('Update');
    }
  }, [customer, reset]);
  
  const insertCustomerMutation = useMutation({
    mutationFn: async (customer: ICustomer) => {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      });
      
      if (!response.ok) {
        throw new Error('Failed to insert customer');
      }
      
      return response.json();
    },
    onSuccess: () => {
      setFormDirty(false);
      navigate({ to: '/customers' });
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
    onError: (error: Error) => {
      const msg = 'Unable to insert customer';
      growl(msg, GrowlerMessageType.Danger);
      setErrorMessage(msg);
      log(error);
    }
  });
  
  const updateCustomerMutation = useMutation({
    mutationFn: async (customer: ICustomer) => {
      const response = await fetch(`/api/customers/${customer.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update customer');
      }
      
      return response.json();
    },
    onSuccess: () => {
      setFormDirty(false);
      growl('Operation performed successfully.', GrowlerMessageType.Success);
      queryClient.invalidateQueries({ queryKey: ['customers'] });
      queryClient.invalidateQueries({ queryKey: ['customer', customerId] });
    },
    onError: (error: Error) => {
      const msg = 'Unable to update customer';
      growl(msg, GrowlerMessageType.Danger);
      setErrorMessage(msg);
      log(error);
    }
  });
  
  const deleteCustomerMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/customers/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete customer');
      }
      
      return response.json();
    },
    onSuccess: () => {
      navigate({ to: '/customers' });
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
    onError: (error: Error) => {
      setErrorMessage('Unable to delete customer');
      log(error);
    }
  });
  
  const onSubmit = (data: ICustomer) => {
    if (data.id === 0) {
      insertCustomerMutation.mutate(data);
    } else {
      updateCustomerMutation.mutate(data);
    }
  };
  
  const handleCancel = (event: React.MouseEvent) => {
    event.preventDefault();
    
    if (isDirty) {
      modalService.show({
        header: 'Lose Unsaved Changes?',
        body: 'You have unsaved changes! Would you like to leave the page and lose them?',
        cancelButtonText: 'Cancel',
        OKButtonText: 'Leave'
      }).then((result: boolean) => {
        if (result) {
          navigate({ to: '/customers' });
        }
      });
    } else {
      navigate({ to: '/customers' });
    }
  };
  
  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault();
    if (customerId) {
      deleteCustomerMutation.mutate(customerId);
    }
  };
  
  useEffect(() => {
    setFormDirty(isDirty);
  }, [isDirty]);
  
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="customer-form">
        <FormGroup>
          <Label>First Name</Label>
          <Input
            title="first name"
            type="text"
            isValid={!errors.firstName}
            isDirty={!!control._formValues['firstName']}
            {...register('firstName', { required: true })}
          />
          {errors.firstName && (
            <ErrorMessage>First Name is required</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            title="last name"
            type="text"
            isValid={!errors.lastName}
            isDirty={!!control._formValues['lastName']}
            {...register('lastName', { required: true })}
          />
          {errors.lastName && (
            <ErrorMessage>Last Name is required</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label>Address</Label>
          <Input
            title="address"
            type="text"
            isValid={!errors.address}
            isDirty={!!control._formValues['address']}
            {...register('address', { required: true })}
          />
          {errors.address && (
            <ErrorMessage>Address is required</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label>City</Label>
          <Input
            title="city"
            type="text"
            isValid={!errors.city}
            isDirty={!!control._formValues['city']}
            {...register('city', { required: true })}
          />
          {errors.city && (
            <ErrorMessage>City is required</ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label>State</Label>
          <Controller
            name="state.abbreviation"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                title="states"
                isValid={!errors.state?.abbreviation}
                isDirty={!!field.value}
                {...field}
              >
                <option value="">Select a state...</option>
                {states.map((state) => (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </Select>
            )}
          />
          {errors.state?.abbreviation && (
            <ErrorMessage>State is required</ErrorMessage>
          )}
        </FormGroup>
        
        {customer && (
          <>
            {customer && 'id' in customer && customer.id && deleteMessageEnabled ? (
              <AlertWarning>
                Delete Customer?&nbsp;&nbsp;
                <DangerButton type="button" onClick={handleDelete}>Yes</DangerButton>&nbsp;&nbsp;
                <DefaultButton type="button" onClick={() => setDeleteMessageEnabled(false)}>No</DefaultButton>
              </AlertWarning>
            ) : (
              customer && 'id' in customer && customer.id && (
                <DangerButton 
                  type="button" 
                  onClick={() => setDeleteMessageEnabled(true)}
                >
                  Delete
                </DangerButton>
              )
            )}
            
            {!deleteMessageEnabled && (
              <ButtonContainer>
                <DefaultButton type="button" onClick={handleCancel}>
                  Cancel
                </DefaultButton>
                <SuccessButton 
                  type="submit" 
                  disabled={!isDirty || !isValid}
                >
                  {operationText}
                </SuccessButton>
              </ButtonContainer>
            )}
          </>
        )}
        
        {errorMessage && (
          <AlertDanger>{errorMessage}</AlertDanger>
        )}
      </form>
      <br />
    </Container>
  );
};

export default CustomerEdit;
