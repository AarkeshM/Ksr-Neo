// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Programs from './screens/Programs';
import Services from './screens/Services';
import Startups from './screens/Startups';
import Domains from './screens/Domains';
import GetInvolved from './screens/GetInvolved';

import './styles/App.css'; // Global styles
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutUs />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/startups" element={<Startups />} />
      <Route path="/domains" element={<Domains />} />
      <Route path="/get-involved" element={<GetInvolved />} />

      {/* Redirects & 404 */}
      <Route path="/about-us" element={<Navigate to="/about" replace />} />
    </Routes>
  );
}
