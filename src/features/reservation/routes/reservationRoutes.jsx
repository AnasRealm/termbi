import { lazy } from 'react';

const ReservePage = lazy(() => import('../pages').then(module => ({ default: module.ReservePage })));

export const reservationRoutes = [
  {
    path: '/reservation',
    element: <ReservePage />
  }
];