import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import routes from '../routes/routes';

const Layout = () => (
  <main>
    <Outlet />
  </main>
);

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
