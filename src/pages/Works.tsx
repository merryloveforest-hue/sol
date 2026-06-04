import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Works: React.FC = () => {
  return (
    <div className="page-container fade-in">
      <section className="section">
        <div className="container">
          <SectionHeading title="작품 소개" subtitle="정신을 담은 선, 공간을 채우는 미학" />
          <div className="works-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="work-card">
                <div className="work-img-container">
                  <img src={`https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800&sig=${i}`} alt={`Work ${i}`} />
                  <div className="work-overlay">
                    <button className="btn btn-outline">상세보기</button>
                  </div>
                </div>
                <div className="work-details mt-md">
                  <h4 className="serif">서예 작품 {i}</h4>
                  <p className="text-muted">Ink on Hanji, 2026</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--spacing-xl);
        }
        .work-img-container {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          border-radius: 8px;
        }
        .work-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        .work-overlay {
          position: absolute;
          inset: 0;
          background: rgba(30, 57, 50, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }
        .work-card:hover img { transform: scale(1.05); }
        .work-card:hover .work-overlay { opacity: 1; }
      `}</style>
    </div>
  );
};

export default Works;
