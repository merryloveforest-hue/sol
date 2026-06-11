import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';

// Pages
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Works from './pages/Works';
import Shop from './pages/Shop';
import Space from './pages/Space';
import Reviews from './pages/Reviews';
import CustomerService from './pages/CustomerService';
import Login from './pages/Login';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Inquiries from './pages/admin/Inquiries';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/works" element={<Works />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/space" element={<Space />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cs" element={<CustomerService />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="inquiries" element={<Inquiries />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
