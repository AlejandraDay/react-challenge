// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './layouts/Login';
import Page1 from './layouts/Page1';
import Page2 from './layouts/Page2';

const RoutesConfig: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
  );
};

export default RoutesConfig;
