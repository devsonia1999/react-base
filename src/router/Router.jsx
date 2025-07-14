import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/user/Login';
import LoginCallback from '@/pages/user/LoginCallback';
import { Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <div className='wrap'>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<LoginCallback />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router
