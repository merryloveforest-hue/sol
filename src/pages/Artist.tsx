import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Artist: React.FC = () => {
  return (
    <div className="page-container fade-in">
      <section className="section bg-white">
        <div className="container artist-grid">
          <div className="artist-image">
            <img src="https://images.unsplash.com/photo-1471666875520-c75081f42081?auto=format&fit=crop&q=80&w=800" alt="Artist at work" className="rounded shadow" />
          </div>
          <div className="artist-info">
            <SectionHeading title="작가 소개" subtitle="솔빛 작가 (Solbit)" align="left" />
            <p>20년 넘게 묵향과 함께하며 전통 서예의 현대적 해석을 연구해왔습니다. '솔빛'은 소나무 사이로 비치는 햇살처럼, 전통이 우리 삶의 어두운 구석을 따뜻하게 밝혀주길 바라는 마음을 담고 있습니다.</p>
            <ul className="artist-history mt-lg">
              <li>• 대한민국 미술대전 서예부문 초대작가</li>
              <li>• '붓 끝의 현대' 개인전 외 다수 전시</li>
              <li>• 현대 서예 브랜드 '솔빛' 런칭</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        .artist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xxl);
          align-items: center;
        }
        .rounded { border-radius: 12px; }
        .shadow { box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .artist-history li {
          margin-bottom: var(--spacing-sm);
          font-weight: 500;
        }
        @media (max-width: 992px) {
          .artist-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Artist;
