import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage.jsx'));

export const homeRoutes = [
  {
    path: '/',
    element: <HomePage />
  }
];