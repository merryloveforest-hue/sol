import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="serif">솔빛공방</h3>
            <p className="mt-md">전통의 아름다움을 현대적인 감각으로 담아내는 서예 MD 전문 공방입니다.</p>
            <div className="social-links mt-lg">
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul className="mt-md">
              <li><Link to="/artist">작가 소개</Link></li>
              <li><Link to="/works">작품 소개</Link></li>
              <li><Link to="/shop">판매작품</Link></li>
              <li><Link to="/reviews">후기</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul className="mt-md">
              <li className="flex-item"><MapPin size={16} /> <span>서울시 종로구 인사동길 12, 3층</span></li>
              <li className="flex-item"><Phone size={16} /> <span>010-1234-1234</span></li>
              <li className="flex-item"><Mail size={16} /> <span>contact@solbit.com</span></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p className="mt-md">새로운 작품과 이벤트 소식을 받아보세요.</p>
            <form className="newsletter-form mt-md">
              <input type="email" placeholder="Email address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom mt-xl">
          <p>&copy; 2026 Solbit Workshop. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--bg-white);
          border-top: 1px solid var(--border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: var(--spacing-xxl);
        }
        .footer h4 {
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-main);
        }
        .footer-links li, .footer-contact li {
          margin-bottom: var(--spacing-sm);
          font-size: 14px;
          color: var(--text-muted);
        }
        .flex-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-sm);
        }
        .social-links {
          display: flex;
          gap: var(--spacing-md);
        }
        .newsletter-form {
          display: flex;
          gap: var(--spacing-sm);
        }
        .newsletter-form input {
          flex: 1;
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid var(--border);
          background-color: var(--bg-canvas);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--border);
          font-size: 12px;
          color: var(--text-muted);
        }
        .legal-links {
          display: flex;
          gap: var(--spacing-md);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: var(--spacing-md);
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
