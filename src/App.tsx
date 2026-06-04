import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Works from './pages/Works';
import Shop from './pages/Shop';
import Space from './pages/Space';
import Reviews from './pages/Reviews';
import CustomerService from './pages/CustomerService';

const App: React.FC = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/works" element={<Works />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/space" element={<Space />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cs" element={<CustomerService />} />
        </Routes>
      </main>

      <Footer />

      <style>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
          padding-top: 80px; /* offset for fixed header */
        }
        .page-container {
          min-height: 100%;
        }
        .bg-white { background-color: var(--bg-white); }
        .bg-light { background-color: var(--brand-light); }
      `}</style>
    </div>
  );
};

export default App;
