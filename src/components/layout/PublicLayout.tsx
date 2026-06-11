import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const PublicLayout: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
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

export default PublicLayout;
