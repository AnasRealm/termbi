import { lazy } from 'react';
import { appRoutes } from '../../../routes/index.jsx';
import { MainLayout } from '../../../shared/layouts/main-layout/MainLayout';

const ProfilePage = lazy(() => import('../pages/ProfilePage.jsx'));
const OrdersPage = lazy(() => import('../pages/OrdersPage.jsx'));
const ReservationsPage = lazy(() => import('../pages/ReservationsPage.jsx'));

export const profileRoutes = [
  {
    path: appRoutes.profile.manage,
    element: (
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    )
  },
  {
    path: appRoutes.profile.orders,
    element: (
      <MainLayout>
        <OrdersPage />
      </MainLayout>
    )
  },
  {
    path: appRoutes.profile.reservations,
    element: (
      <MainLayout>
        <ReservationsPage />
      </MainLayout>
    )
  }
];