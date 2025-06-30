import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/user/Login';
import LoginCallback from '@/pages/user/LoginCallback';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<LoginCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router
