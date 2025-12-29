// src/routes/provider.jsx
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { homeRoutes } from "../features/home/routes/homeRoutes";
import { contactRoutes } from "../features/contact/routes/contactRoutes";
import { reservationRoutes } from "../features/reservation/routes/reservationRoutes";
import { restaurantRoutes } from "../features/restaurant/routes/restaurantRoutes";
import { authRoutes } from "../features/Auth/routes/authRoutes.jsx";
import { profileRoutes } from "../features/profile/routes/profileRoutes";

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      ...homeRoutes,
      ...contactRoutes,
      ...reservationRoutes,
      ...restaurantRoutes,
      ...authRoutes,
      ...profileRoutes, 
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
