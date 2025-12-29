import { lazy } from "react";

const Restaurant = lazy(() => import("../pages/restaurant.jsx"));
const RestaurantRegister = lazy(() => import("../components/RestaurantRegister/RestaurantRegister.jsx"));
const Cart = lazy(() => import("../pages/Cart.jsx"));
const Checkout = lazy(() => import("../pages/Checkout.jsx"));
const PlaceOrder = lazy(() => import("../pages/PlaceOrder.jsx"));
const ConfirmOrder = lazy(() => import("../pages/ConfirmOrder.jsx"));

export const restaurantRoutes = [
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/restaurant/:id",
    element: <Restaurant />,
  },
  {
    path: "/restaurant/:id/menu",
    element: <Restaurant />,
  },
  {
    path: "/restaurant/register",
    element: <RestaurantRegister />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/place-order",
    element: <PlaceOrder />,
  },
  {
    path: "/confirm-order",
    element: <ConfirmOrder />,
  },
];
