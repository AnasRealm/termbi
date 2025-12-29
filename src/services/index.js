// Export all API classes and instances
export * from './api.js';

// Export all React Query hooks
export * from './queries.js';

// Export all constants
export * from './constants.js';

// Export new services
export { default as ProductsServices } from './products.js';
export { default as CartServices } from './cart.js';
export { default as AuthServices } from './auth.js';

// Re-export commonly used instances for convenience
export {
  authAPI,
  productsAPI,
  cartAPI,
  searchAPI,
  restaurantsAPI,
  ordersAPI,
  reservationsAPI,
  reviewsAPI,
  contactAPI,
} from './api.js';