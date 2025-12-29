// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/users/login',
    SIGNUP: '/users/add',
    ME: '/auth/me',
    FILTER_BY_EMAIL: (email) => `/users/filter?key=email&value=${email}`,
    FILTER_BY_USERNAME: (username) => `/users/filter?key=username&value=${username}`,
  },
  
  // Products
  PRODUCTS: {
    ALL: '/products',
    BY_ID: (id) => `/products/${id}`,
    SEARCH: '/products/search',
  },
  
  // Categories
  CATEGORIES: {
    ALL: '/categories',
    WITH_PRODUCTS: '/categories?with_products=1&restaurant_admin_id=8&sort_term=desc&sort_by=name',
  },
  
  // Cart
  CART: {
    ALL: '/carts',
    BY_ID: (id) => `/carts/${id}`,
  },
  
  // Restaurants
  RESTAURANTS: {
    ALL: '/restaurants',
    BY_ID: (id) => `/restaurants/${id}`,
    MENU: (id) => `/restaurants/${id}/menu`,
  },
  
  // Orders
  ORDERS: {
    ALL: '/orders',
    BY_ID: (id) => `/orders/${id}`,
    STATUS: (id) => `/orders/${id}/status`,
  },
  
  // Reservations
  RESERVATIONS: {
    ALL: '/reservations',
    BY_ID: (id) => `/reservations/${id}`,
  },
  
  // Reviews
  REVIEWS: {
    ALL: '/reviews',
    BY_RESTAURANT: (restaurantId) => `/reviews?restaurant_id=${restaurantId}`,
    USER: '/reviews/user',
  },
  
  // Contact
  CONTACT: '/contact',
  
  // Sliders
  SLIDERS: '/sliders?slug=tempora',
};

// Query Keys
export const QUERY_KEYS = {
  // Auth
  USER: ['user'],
  USER_ME: ['user', 'me'],
  
  // Products
  PRODUCTS: ['products'],
  PRODUCT: ['product'],
  
  // Categories
  CATEGORIES: ['categories'],
  
  // Cart
  CART: ['cart'],
  
  // Search
  SEARCH: ['search'],
  
  // Restaurants
  RESTAURANTS: ['restaurants'],
  RESTAURANT: ['restaurant'],
  RESTAURANT_MENU: ['restaurant', 'menu'],
  
  // Orders
  ORDERS: ['orders'],
  ORDER: ['order'],
  
  // Reservations
  RESERVATIONS: ['reservations'],
  RESERVATION: ['reservation'],
  
  // Reviews
  REVIEWS: ['reviews'],
  RESTAURANT_REVIEWS: ['reviews', 'restaurant'],
  USER_REVIEWS: ['reviews', 'user'],
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  READY: 'ready',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Reservation Status
export const RESERVATION_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
};

// Payment Methods
export const PAYMENT_METHODS = {
  CASH: 'cash',
  CARD: 'card',
  ONLINE: 'online',
};

// Sort Options
export const SORT_OPTIONS = {
  NAME: 'name',
  PRICE: 'price',
  RATING: 'rating',
  DATE: 'created_at',
};

// Sort Terms
export const SORT_TERMS = {
  ASC: 'asc',
  DESC: 'desc',
};