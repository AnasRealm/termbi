import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  authAPI,
  productsAPI,
  cartAPI,
  searchAPI,
  restaurantsAPI,
  ordersAPI,
  reservationsAPI,
  reviewsAPI,
  contactAPI,
} from './api';

// Auth Hooks
export const useSignUp = () => {
  return useMutation({
    mutationFn: authAPI.signUp.bind(authAPI),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: authAPI.login.bind(authAPI),
  });
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ['user', 'me'],
    queryFn: authAPI.getMe.bind(authAPI),
  });
};

// Products Hooks
export const useGetProducts = (params) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => productsAPI.getAllProducts(params),
  });
};

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: productsAPI.getAllCategories.bind(productsAPI),
  });
};

export const useGetProduct = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productsAPI.getProductById(id),
    enabled: !!id,
  });
};

// Cart Hooks
export const useGetCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: cartAPI.getAllProductsInCart.bind(cartAPI),
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cartAPI.addProductToCart.bind(cartAPI),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ cartItemId, data }) => cartAPI.updateCartItem(cartItemId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: cartAPI.deleteCartItem.bind(cartAPI),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

// Search Hooks
export const useSearch = (query) => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => searchAPI.search(query),
    enabled: !!query && query.length > 2,
  });
};

// Restaurants Hooks
export const useGetRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: restaurantsAPI.getAllRestaurants.bind(restaurantsAPI),
  });
};

export const useGetRestaurant = (id) => {
  return useQuery({
    queryKey: ['restaurant', id],
    queryFn: () => restaurantsAPI.getRestaurantById(id),
    enabled: !!id,
  });
};

export const useGetRestaurantMenu = (id) => {
  return useQuery({
    queryKey: ['restaurant', id, 'menu'],
    queryFn: () => restaurantsAPI.getRestaurantMenu(id),
    enabled: !!id,
  });
};

// Orders Hooks
export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ordersAPI.createOrder.bind(ordersAPI),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const useGetUserOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: ordersAPI.getUserOrders.bind(ordersAPI),
  });
};

export const useGetOrder = (id) => {
  return useQuery({
    queryKey: ['order', id],
    queryFn: () => ordersAPI.getOrderById(id),
    enabled: !!id,
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) => ordersAPI.updateOrderStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};

// Reservations Hooks
export const useCreateReservation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: reservationsAPI.createReservation.bind(reservationsAPI),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
};

export const useGetUserReservations = () => {
  return useQuery({
    queryKey: ['reservations'],
    queryFn: reservationsAPI.getUserReservations.bind(reservationsAPI),
  });
};

export const useCancelReservation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: reservationsAPI.cancelReservation.bind(reservationsAPI),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
};

// Reviews Hooks
export const useCreateReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: reviewsAPI.createReview.bind(reviewsAPI),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
};

export const useGetRestaurantReviews = (restaurantId) => {
  return useQuery({
    queryKey: ['reviews', 'restaurant', restaurantId],
    queryFn: () => reviewsAPI.getRestaurantReviews(restaurantId),
    enabled: !!restaurantId,
  });
};

export const useGetUserReviews = () => {
  return useQuery({
    queryKey: ['reviews', 'user'],
    queryFn: reviewsAPI.getUserReviews.bind(reviewsAPI),
  });
};

// Contact Hook
export const useSendContactMessage = () => {
  return useMutation({
    mutationFn: contactAPI.sendContactMessage.bind(contactAPI),
  });
};