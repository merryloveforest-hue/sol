import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="page-container fade-in">
      <section className="section bg-light">
        <div className="container">
          <SectionHeading title="고객 후기" subtitle="솔빛공방과 함께한 따뜻한 이야기들" />
          <div className="reviews-grid">
            {[
              { name: "이민지", content: "텀블러의 서예 글귀가 너무 아름다워요. 매일 아침 차를 마실 때마다 마음이 평온해집니다.", rating: 5 },
              { name: "박지성", content: "선물용으로 엽서 세트를 구매했는데 받는 분이 너무 좋아하셨어요. 패키지도 정말 고급스럽습니다.", rating: 5 },
              { name: "김태희", content: "갤러리 방문했는데 공간 자체가 힐링이었습니다. 작가님의 작품 설명도 인상적이었어요.", rating: 4 },
              { name: "정우성", content: "디퓨저 향이 정말 고급스럽고, 패키징에 적힌 글씨가 너무 맘에 듭니다.", rating: 5 },
              { name: "손예진", content: "지인 선물로 샀는데 포장이 예술이네요. 다음에도 이용할게요.", rating: 5 },
              { name: "공유", content: "캔버스 백 디자인이 독특해서 어디서 샀냐는 질문을 많이 받습니다.", rating: 4 }
            ].map((rev, i) => (
              <div key={i} className="review-card">
                <div className="review-rating">
                  {[...Array(rev.rating)].map((_, j) => <Star key={j} size={16} fill="#FFD700" color="#FFD700" />)}
                </div>
                <p className="mt-md italic">"{rev.content}"</p>
                <div className="mt-lg flex-between">
                  <span className="font-bold">{rev.name} 님</span>
                  <span className="text-muted text-sm">2026.04.12</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }
        .review-card {
          background: var(--bg-white);
          padding: var(--spacing-lg);
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        .italic { font-style: italic; color: var(--text-main); line-height: 1.8; }
        .flex-between { display: flex; justify-content: space-between; align-items: center; }
        .font-bold { font-weight: 700; }
        .review-rating { display: flex; }
      `}</style>
    </div>
  );
};

export default Reviews;
