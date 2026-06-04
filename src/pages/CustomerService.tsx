import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { MessageSquare, Star } from 'lucide-react';
import Board from '../components/Board';

const CustomerService: React.FC = () => {
  const [showBoard, setShowBoard] = useState(false);

  return (
    <div className="page-container fade-in">
      <section className="section bg-white">
        <div className="container">
          <div className="cs-container">
            {!showBoard ? (
              <>
                <SectionHeading title="고객센터 게시판" subtitle="문의사항이 있으시면 언제든 남겨주세요" />
                <div className="cs-grid">
                  <div className="cs-card" onClick={() => setShowBoard(true)} style={{cursor: 'pointer'}}>
                    <MessageSquare size={32} className="mb-md" />
                    <h4>1:1 문의하기</h4>
                    <p className="mt-sm">작품 주문 제작 및 배송 관련 문의</p>
                    <button className="btn btn-outline mt-md" onClick={(e) => { e.stopPropagation(); setShowBoard(true); }}>문의 작성</button>
                  </div>
                  <div className="cs-card" onClick={() => setShowBoard(true)} style={{cursor: 'pointer'}}>
                    <Star size={32} className="mb-md" />
                    <h4>자주 묻는 질문</h4>
                    <p className="mt-sm">결제, 교환, 환불 안내</p>
                    <button className="btn btn-outline mt-md" onClick={(e) => { e.stopPropagation(); setShowBoard(true); }}>FAQ 보기</button>
                  </div>
                </div>
              </>
            ) : (
              <div className="fade-in">
                <div style={{ marginBottom: '20px' }}>
                  <button className="btn btn-outline" onClick={() => setShowBoard(false)}>← 뒤로 가기</button>
                </div>
                <Board />
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .cs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          max-width: 800px;
          margin: 0 auto;
        }
        .cs-card {
          background: var(--bg-white);
          padding: var(--spacing-xl);
          border-radius: 12px;
          text-align: center;
          transition: var(--transition);
          border: 1px solid var(--border);
        }
        .cs-card:hover { border-color: var(--brand-primary); transform: translateY(-5px); }
        @media (max-width: 992px) {
          .cs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default CustomerService;
