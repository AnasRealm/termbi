import api from '../../../lib/axios';

export const authApi = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  googleLogin: async (credentials) => {
    const response = await api.post('/auth/google/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  facebookLogin: async () => {
    window.location.href = 'https://training.tamkeen-dev.com/termc/public/api/auth/facebook/login';
  }
};