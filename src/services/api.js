import { httpClient } from '../lib/axios/axios.js';

// Auth Services
export class AuthAPI {
  endPoint = '/users';

  async getUserByEmail(email) {
    const response = await httpClient.get(
      `${this.endPoint}/filter?key=email&value=${email}`
    );
    return response?.data?.users?.[0] || null;
  }

  async getUserByUsername(name) {
    const response = await httpClient.get(
      `${this.endPoint}/filter?key=username&value=${name}`
    );
    return response?.data?.users?.[0] || null;
  }

  async signUp(payload) {
    const userResponse = await this.getUserByEmail(payload.email);
    if (userResponse) return userResponse;
    
    const response = await httpClient.post(`${this.endPoint}/add`, {
      data: payload,
    });
    return response.data;
  }

  async login(payload) {
    const response = await httpClient.post(`${this.endPoint}/login`, payload);
    return response.data;
  }

  async getMe() {
    const response = await httpClient.get('/auth/me');
    return response.data;
  }
}

// Products Services
export class ProductsAPI {
  async getAllProducts(params) {
    const response = await httpClient.get('/products', {
      params: {
        restaurant_admin_id: 8,
        sort_term: 'asc',
        sort_by: params.sort,
        category_id: params.category_id,
      },
    });
    return response.data?.data;
  }

  async getAllCategories() {
    const response = await httpClient.get(
      '/categories?with_products=1&restaurant_admin_id=8&sort_term=desc&sort_by=name'
    );
    return response.data?.data;
  }

  async getProductById(id) {
    const response = await httpClient.get(`/products/${id}`);
    return response.data?.data;
  }
}

// Cart Services
export class CartAPI {
  endPoint = '/carts';

  async getAllProductsInCart() {
    const response = await httpClient.get(this.endPoint);
    return response?.data?.data;
  }

  async addProductToCart(product) {
    const response = await httpClient.post(this.endPoint, product);
    return response?.data;
  }

  async updateCartItem(cartItemId, data) {
    const response = await httpClient.put(`${this.endPoint}/${cartItemId}`, data);
    return response?.data;
  }

  async deleteCartItem(cartItemId) {
    const response = await httpClient.delete(`${this.endPoint}/${cartItemId}`);
    return response?.data;
  }
}

// Search Services
export class SearchAPI {
  endPoint = '/products/search';

  async search(query) {
    const response = await httpClient.get(`${this.endPoint}?q=${query}`);
    return response?.data;
  }
}

// Restaurants Services
export class RestaurantsAPI {
  async getAllRestaurants() {
    const response = await httpClient.get('/restaurants');
    return response.data?.data;
  }

  async getRestaurantById(id) {
    const response = await httpClient.get(`/restaurants/${id}`);
    return response.data?.data;
  }

  async getRestaurantMenu(id) {
    const response = await httpClient.get(`/restaurants/${id}/menu`);
    return response.data?.data;
  }
}

// Orders Services
export class OrdersAPI {
  endPoint = '/orders';

  async createOrder(orderData) {
    const response = await httpClient.post(this.endPoint, orderData);
    return response.data;
  }

  async getUserOrders() {
    const response = await httpClient.get(this.endPoint);
    return response.data?.data;
  }

  async getOrderById(id) {
    const response = await httpClient.get(`${this.endPoint}/${id}`);
    return response.data?.data;
  }

  async updateOrderStatus(id, status) {
    const response = await httpClient.put(`${this.endPoint}/${id}/status`, {
      status,
    });
    return response.data;
  }
}

// Reservations Services
export class ReservationsAPI {
  endPoint = '/reservations';

  async createReservation(reservationData) {
    const response = await httpClient.post(this.endPoint, reservationData);
    return response.data;
  }

  async getUserReservations() {
    const response = await httpClient.get(this.endPoint);
    return response.data?.data;
  }

  async cancelReservation(id) {
    const response = await httpClient.delete(`${this.endPoint}/${id}`);
    return response.data;
  }
}

// Reviews Services
export class ReviewsAPI {
  endPoint = '/reviews';

  async createReview(reviewData) {
    const response = await httpClient.post(this.endPoint, reviewData);
    return response.data;
  }

  async getRestaurantReviews(restaurantId) {
    const response = await httpClient.get(`${this.endPoint}?restaurant_id=${restaurantId}`);
    return response.data?.data;
  }

  async getUserReviews() {
    const response = await httpClient.get(`${this.endPoint}/user`);
    return response.data?.data;
  }
}

// Contact Services
export class ContactAPI {
  async sendContactMessage(messageData) {
    const response = await httpClient.post('/contact', messageData);
    return response.data;
  }
}

// API Instances
export const authAPI = new AuthAPI();
export const productsAPI = new ProductsAPI();
export const cartAPI = new CartAPI();
export const searchAPI = new SearchAPI();
export const restaurantsAPI = new RestaurantsAPI();
export const ordersAPI = new OrdersAPI();
export const reservationsAPI = new ReservationsAPI();
export const reviewsAPI = new ReviewsAPI();
export const contactAPI = new ContactAPI();