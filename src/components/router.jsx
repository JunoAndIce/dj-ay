import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from '../pages/home';
import AboutMe from '../pages/aboutMe';
import News from '../pages/news';
// import Contact from '../pages/contact'; // Make sure this is not commented

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/dj-ay',
    element: <Layout />,
    children: [
      {
        index: true, // matches '/'
        element: <Home />
      },
      {
        path: 'aboutme',
        element: <AboutMe />
      },
      {
        path: 'news',
        element: <News />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
