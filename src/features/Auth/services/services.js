import { httpClient } from '../lib/axios';

class AuthServices {
  #base = '/auth';

  async signUp(payload) {
    const { data } = await httpClient.post(`${this.#base}/signup`, payload);
    return data;
  }

  async login(payload) {
    const { data } = await httpClient.post(`${this.#base}/login`, payload);
    return data;
  }

  async getMe() {
    const { data } = await httpClient.get(`${this.#base}/me`);
    return data;
  }

  async logout() {
    const { data } = await httpClient.post(`${this.#base}/logout`);
    return data;
  }
}

export default new AuthServices();