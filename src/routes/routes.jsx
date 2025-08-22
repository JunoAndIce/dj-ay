import Home from '../pages/home';
import AboutMe from '../pages/aboutMe';
import News from '../pages/news';
import MyMusic from '../pages/myMusic';
// import Contact from '../pages/contact'; // Add if needed

const routes = [
  { path: '/', element: <Home />},
  { path: 'about-me', element: <AboutMe />},
  { path: 'news', element: <News />},
  { path: 'my-music', element: <MyMusic /> },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
];

export default routes;
