import { httpClient } from '../lib/axios/axios';
import { userStorage } from '../features/Auth/storage';

class AuthServices {
  #endPoint = '/auth';

  async login(payload) {
    try {
      const response = await httpClient.post(
        `${this.#endPoint}/login`,
        payload
      );
      return response.data;
    } catch (e) {
      throw new Error('Invalid password or email');
    }
  }

  async register(payload) {
    try {
      const response = await httpClient.post(
        `${this.#endPoint}/register`,
        payload
      );
      return response.data;
    } catch (e) {
      throw new Error('Registration failed');
    }
  }

  async getMe() {
    const token = userStorage.get();
    if (token) {
      const response = await httpClient.get(`${this.#endPoint}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        return response.data;
      }
    }
    return null;
  }

  async logout() {
    try {
      await httpClient.post(`${this.#endPoint}/logout`);
      userStorage.remove();
    } catch (e) {
      userStorage.remove();
    }
  }
}

export default new AuthServices();