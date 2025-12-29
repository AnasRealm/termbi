import { lazy } from 'react';
import { MainLayout } from '../../../shared/layouts/main-layout/MainLayout';
import { appRoutes } from '../../../routes/index.jsx';

const AuthPage = lazy(() => import('../pages/Authpage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage.jsx'));
const SignupPage = lazy(() => import('../pages/SignupPage.jsx'));

export const authRoutes = [
  {
    path: appRoutes.auth.auth,
    element: (
      <MainLayout>
        <AuthPage />
      </MainLayout>
    ),
  },
  {
    path: appRoutes.auth.login,
    element: (
      <MainLayout>
        <LoginPage />
      </MainLayout>
    ),
  },
  {
    path: appRoutes.auth.signup,
    element: (
      <MainLayout>
        <SignupPage />
      </MainLayout>
    ),
  },
];