import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const { cart, isCartOpen, setIsCartOpen, setSearchQuery } = useShop();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    navigate('/shop');
    setIsSearchOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo serif">
          <Link to="/">솔빛공방</Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/artist" onClick={() => setIsMenuOpen(false)}>작가 소개</Link></li>
            <li><Link to="/works" onClick={() => setIsMenuOpen(false)}>작품 소개</Link></li>
            <li><Link to="/shop" onClick={() => setIsMenuOpen(false)}>판매작품</Link></li>
            <li><Link to="/space" onClick={() => setIsMenuOpen(false)}>전시공간</Link></li>
            <li><Link to="/reviews" onClick={() => setIsMenuOpen(false)}>후기</Link></li>
            <li><Link to="/cs" onClick={() => setIsMenuOpen(false)}>고객센터</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="search-form">
              <input 
                type="text" 
                placeholder="상품 검색..." 
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                autoFocus
              />
              <button type="button" onClick={() => setIsSearchOpen(false)}><X size={16} /></button>
            </form>
          ) : (
            <button aria-label="Search" onClick={() => setIsSearchOpen(true)}><Search size={20} /></button>
          )}
          
          <Link to="/login" aria-label="Account" className="user-btn"><User size={20} /></Link>
          
          <button aria-label="Cart" className="cart-btn" onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingBag size={20} />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          background-color: transparent;
          transition: var(--transition);
        }
        .header.scrolled {
          background-color: var(--bg-white);
          height: 70px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .logo a {
          font-size: 24px;
          font-weight: 600;
          color: var(--brand-deep);
        }
        .nav-list {
          display: flex;
          gap: var(--spacing-xl);
        }
        .nav-list a {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }
        .nav-list a:hover {
          color: var(--brand-primary);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        .cart-btn {
          position: relative;
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--brand-primary);
          color: white;
          font-size: 10px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        .mobile-toggle {
          display: none;
        }
        .search-form {
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--brand-primary);
          padding-bottom: 2px;
        }
        .search-form input {
          border: none;
          outline: none;
          background: transparent;
          width: 120px;
          font-family: inherit;
        }
        .user-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          color: inherit;
        }
        @media (max-width: 992px) {
          .nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-white);
            padding: var(--spacing-lg);
            display: none;
            border-top: 1px solid var(--border);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          .nav.open {
            display: block;
          }
          .nav-list {
            flex-direction: column;
            gap: var(--spacing-md);
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
