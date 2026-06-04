import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const HERO_IMG = heroImg;

const Home: React.FC = () => {
  return (
    <div className="page-container fade-in">
      <section className="hero">
        <div className="hero-content container">
          <h1 className="serif">전통의 붓결,<br />현대의 일상이 되다</h1>
          <p className="mt-lg">서예의 깊은 울림을 다양한 MD 상품으로 만나보세요.<br />솔빛공방이 선사하는 정갈한 아름다움.</p>
          <div className="hero-btns mt-xl">
            <Link to="/shop" className="btn btn-primary">작품 구매하기 <ArrowRight size={18} style={{marginLeft: '8px'}} /></Link>
            <Link to="/works" className="btn btn-outline" style={{marginLeft: '16px'}}>갤러리 보기</Link>
          </div>
        </div>
        <div className="hero-image-overlay"></div>
      </section>

      <style>{`
        .hero {
          height: calc(100vh - 80px); /* Adjust based on header */
          background-image: url(${HERO_IMG});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          position: relative;
          color: white;
        }
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.7), transparent);
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero h1 {
          font-size: 64px;
          line-height: 1.1;
        }
        .hero p {
          font-size: 20px;
          max-width: 600px;
          opacity: 0.9;
        }
        @media (max-width: 992px) {
          .hero h1 { font-size: 48px; }
        }
        @media (max-width: 768px) {
          .hero h1 { font-size: 36px; }
          .hero p { font-size: 16px; }
        }
      `}</style>
    </div>
  );
};

export default Home;
