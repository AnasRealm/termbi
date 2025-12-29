import axios from 'axios';
import { toast } from 'react-toastify';

const statusesConfig = {
  401: {
    message: 'You are not authorized to access this resource',
    action: function () {
      toast.error(this.message);
      localStorage.removeItem('token');
      window.location.reload();
    },
  },
  403: {
    message: 'You do not have permission to access this resource',
    action: function () {
      toast.error(this.message);
    },
  },
  404: {
    message: 'The requested resource was not found',
    action: function () {
      console.warn('Resource not found');
    },
  },
  500: {
    message: 'An internal server error occurred',
    action: function () {
      toast.error(this.message);
    },
  },
};

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;
    if (status && statusesConfig[status]) {
      statusesConfig[status].action();
    }
    return Promise.reject(error);
  }
);