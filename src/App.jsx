import '@/assets/styles/common.scss';
import { AuthProvider } from '@/context/AuthContext';
import Router from '@/router/Router.jsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App
