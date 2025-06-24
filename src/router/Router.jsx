import Home from '@/pages/Home.jsx';
import Footer from '@/layout/Footer.jsx';
import Header from '@/layout/Header.jsx';
import MenuBar from '@/layout/menuBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <MenuBar />
    </BrowserRouter>
  );
}

export default Router;
