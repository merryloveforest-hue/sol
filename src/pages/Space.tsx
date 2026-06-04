import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Phone, MapPin } from 'lucide-react';

const EXHIBITION_IMG = "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=1200";

const Space: React.FC = () => {
  return (
    <div className="page-container fade-in">
      <section className="section bg-white">
        <div className="container space-grid">
          <div className="space-info">
            <SectionHeading title="전시공간 및 사무실" subtitle="직접 방문하여 서예의 울림을 경험해보세요" align="left" />
            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={24} className="icon" />
                <div>
                  <h5>오시는 길</h5>
                  <p>서울시 종로구 인사동길 12, 솔빛빌딩 3층</p>
                </div>
              </div>
              <div className="contact-item mt-lg">
                <Phone size={24} className="icon" />
                <div>
                  <h5>연락처</h5>
                  <p>010-1234-1234</p>
                </div>
              </div>
            </div>
            <div className="mt-xl">
              <button className="btn btn-primary">방문 예약하기</button>
            </div>
          </div>
          <div className="space-image">
            <img src={EXHIBITION_IMG} alt="Exhibition Space" className="rounded shadow" />
          </div>
        </div>
      </section>

      <style>{`
        .space-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--spacing-xxl);
          align-items: center;
        }
        .contact-item { display: flex; gap: var(--spacing-md); }
        .contact-item h5 { font-family: var(--font-sans); font-weight: 700; font-size: 16px; }
        .contact-item .icon { color: var(--brand-primary); }
        .rounded { border-radius: 12px; }
        .shadow { box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        @media (max-width: 992px) {
          .space-grid { grid-template-columns: 1fr; }
          .space-image { order: -1; }
        }
      `}</style>
    </div>
  );
};

export default Space;
