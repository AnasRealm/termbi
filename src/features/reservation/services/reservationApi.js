import api from '../../../lib/axios';

export const reservationApi = {
  getReservations: async (params) => {
    const response = await api.get('/reservations', { params });
    return response.data;
  },

  createReservation: async (data) => {
    const response = await api.post('/reservations', data);
    return response.data;
  },
};
