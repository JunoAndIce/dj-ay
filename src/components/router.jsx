import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import routes from '../routes/routes';

const Layout = () => (
  <main>
    <Outlet />
  </main>
);

const router = createBrowserRouter([
  {
    path: '/dj-ay',
    element: <Layout />,
    children: routes,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}