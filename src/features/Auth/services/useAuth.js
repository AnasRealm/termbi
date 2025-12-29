import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../../../contexts/AuthContext';
import { authApi } from './authApi';

export const useLogin = () => {
  const { login } = useAuth();
  
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      login(data);
      console.log('Login successful:', data);
    },
    onError: (error) => {
      console.error('Login failed:', error);
    }
  });
};

export const useRegister = () => {
  const { login } = useAuth();
  
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      login(data);
      console.log('Registration successful:', data);
    },
    onError: (error) => {
      console.error('Registration failed:', error);
    }
  });
};