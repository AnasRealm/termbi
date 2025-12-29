import { lazy } from 'react';

const ContactPage = lazy(() => import('../pages/ContactPage.jsx'));

export const contactRoutes = [
  {
    path: '/contact',
    element: <ContactPage />
  }
];