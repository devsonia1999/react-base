import Footer from '@/layout/Footer.jsx';
import Header from '@/layout/Header.jsx';
import Home from '@/pages/Home.jsx';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
