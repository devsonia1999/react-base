import Home from '@/pages/Home'
import Test from '@/pages/Test'
import MainLayout from '@/layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router
