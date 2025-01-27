import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import Contact from '../pages/contact';
import Main from '../pages/main';

const RouterComponent = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/contact-us" element={<Contact />} /> */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default RouterComponent;