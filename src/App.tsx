import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionHeading from './components/SectionHeading';
import { ArrowRight, Star, ShoppingCart, MessageSquare, Phone, MapPin } from 'lucide-react';
import Board from './components/Board';
import heroImg from './assets/hero.png';

// Using the generated images (assuming paths or embedding logic)
const HERO_IMG = heroImg;
const PRODUCT_IMG = "https://images.unsplash.com/photo-1514228742587-6b1558fbed39?auto=format&fit=crop&q=80&w=800";
const EXHIBITION_IMG = "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&q=80&w=1200";

const App: React.FC = () => {
  const [showBoard, setShowBoard] = useState(false);

  return (
    <div className="app">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero fade-in">
          <div className="hero-content container">
            <h1 className="serif">전통의 붓결,<br />현대의 일상이 되다</h1>
            <p className="mt-lg">서예의 깊은 울림을 다양한 MD 상품으로 만나보세요.<br />솔빛공방이 선사하는 정갈한 아름다움.</p>
            <div className="hero-btns mt-xl">
              <a href="#shop" className="btn btn-primary">작품 구매하기 <ArrowRight size={18} style={{marginLeft: '8px'}} /></a>
              <a href="#works" className="btn btn-outline" style={{marginLeft: '16px'}}>갤러리 보기</a>
            </div>
          </div>
          <div className="hero-image-overlay"></div>
        </section>

        {/* Artist Intro Section */}
        <section id="artist" className="section bg-white">
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

        {/* Works Gallery Section */}
        <section id="works" className="section">
          <div className="container">
            <SectionHeading title="작품 소개" subtitle="정신을 담은 선, 공간을 채우는 미학" />
            <div className="works-grid">
              {[1, 2, 3, 4].map((i) => (
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

        {/* Shop Section */}
        <section id="shop" className="section bg-light">
          <div className="container">
            <SectionHeading title="판매작품 (MD)" subtitle="일상을 빛내는 정갈한 감성 아이템" />
            <div className="product-grid">
              {[
                { name: "솔빛 시그니처 텀블러", price: "32,000", img: PRODUCT_IMG },
                { name: "한지 캘리그라피 엽서 세트", price: "12,000", img: "https://images.unsplash.com/photo-1583138814324-4860d5b72186?auto=format&fit=crop&q=80&w=800" },
                { name: "서예 아트 캔버스 백", price: "28,000", img: "https://images.unsplash.com/photo-1544816153-199d8bb4b96e?auto=format&fit=crop&q=80&w=800" },
                { name: "묵향 디퓨저 패키지", price: "45,000", img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800" }
              ].map((prod, i) => (
                <div key={i} className="product-card">
                  <div className="product-img">
                    <img src={prod.img} alt={prod.name} />
                    <button className="add-to-cart"><ShoppingCart size={20} /></button>
                  </div>
                  <div className="product-info mt-md">
                    <h4>{prod.name}</h4>
                    <p className="price">₩{prod.price}</p>
                    <div className="rating">
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <Star size={14} fill="currentColor" />
                      <span>(24)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-xl">
              <button className="btn btn-outline">전체 상품 보기</button>
            </div>
          </div>
        </section>

        {/* Exhibition & Office Section */}
        <section id="space" className="section bg-white">
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

        {/* Reviews Section */}
        <section id="reviews" className="section">
          <div className="container">
            <SectionHeading title="고객 후기" subtitle="솔빛공방과 함께한 따뜻한 이야기들" />
            <div className="reviews-grid">
              {[
                { name: "이민지", content: "텀블러의 서예 글귀가 너무 아름다워요. 매일 아침 차를 마실 때마다 마음이 평온해집니다.", rating: 5 },
                { name: "박지성", content: "선물용으로 엽서 세트를 구매했는데 받는 분이 너무 좋아하셨어요. 패키지도 정말 고급스럽습니다.", rating: 5 },
                { name: "김태희", content: "갤러리 방문했는데 공간 자체가 힐링이었습니다. 작가님의 작품 설명도 인상적이었어요.", rating: 4 }
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

        {/* Customer Center Section */}
        <section id="cs" className="section bg-light">
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
      </main>

      <Footer />

      <style>{`
        .app {
          min-height: 100vh;
        }
        .bg-white { background-color: var(--bg-white); }
        .bg-light { background-color: var(--brand-light); }
        
        /* Hero Styling */
        .hero {
          height: 90vh;
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

        /* Artist Styling */
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

        /* Works Grid */
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

        /* Product Card */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: var(--spacing-xl);
        }
        .product-card {
          background: var(--bg-white);
          padding: var(--spacing-md);
          border-radius: 12px;
          transition: var(--transition);
        }
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
        .product-img {
          position: relative;
          aspect-ratio: 1;
          background: #f8f8f8;
          border-radius: 8px;
          overflow: hidden;
        }
        .product-img img { width: 100%; height: 100%; object-fit: contain; }
        .add-to-cart {
          position: absolute;
          bottom: var(--spacing-md);
          right: var(--spacing-md);
          background: var(--brand-primary);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }
        .product-card:hover .add-to-cart { opacity: 1; transform: scale(1.1); }
        .price { font-weight: 700; color: var(--brand-deep); font-size: 18px; margin-top: 4px; }
        .rating { display: flex; align-items: center; gap: 4px; color: #FFD700; font-size: 12px; margin-top: 8px; }
        .rating span { color: var(--text-muted); margin-left: 4px; }

        /* Space Grid */
        .space-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--spacing-xxl);
          align-items: center;
        }
        .contact-item { display: flex; gap: var(--spacing-md); }
        .contact-item h5 { font-family: var(--font-sans); font-weight: 700; font-size: 16px; }
        .contact-item .icon { color: var(--brand-primary); }

        /* Review Cards */
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

        /* CS Styling */
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
          border: 1px solid transparent;
        }
        .cs-card:hover { border-color: var(--brand-primary); transform: translateY(-5px); }

        @media (max-width: 992px) {
          .hero h1 { font-size: 48px; }
          .artist-grid, .space-grid, .cs-grid { grid-template-columns: 1fr; }
          .space-image { order: -1; }
        }
        @media (max-width: 768px) {
          .hero h1 { font-size: 36px; }
          .hero p { font-size: 16px; }
        }
      `}</style>
    </div>
  );
};

export default App;
