import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { ShoppingCart, Star } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const PRODUCT_IMG = "https://images.unsplash.com/photo-1514228742587-6b1558fbed39?auto=format&fit=crop&q=80&w=800";

const Shop: React.FC = () => {
  const { addToCart, searchQuery } = useShop();

  const products = [
    { id: 1, name: "솔빛 시그니처 텀블러", price: 32000, image: PRODUCT_IMG },
    { id: 2, name: "한지 캘리그라피 엽서 세트", price: 12000, image: "https://images.unsplash.com/photo-1583138814324-4860d5b72186?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "서예 아트 캔버스 백", price: 28000, image: "https://images.unsplash.com/photo-1544816153-199d8bb4b96e?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "묵향 디퓨저 패키지", price: 45000, image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "프리미엄 붓펜 세트", price: 55000, image: "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "전통 한지 노트", price: 18000, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800" }
  ];

  const filteredProducts = products.filter(p => p.name.includes(searchQuery));

  return (
    <div className="page-container fade-in">
      <section className="section bg-light">
        <div className="container">
          <SectionHeading title="판매작품 (MD)" subtitle="일상을 빛내는 정갈한 감성 아이템" />
          
          {searchQuery && (
            <div style={{ marginBottom: '20px', fontSize: '18px' }}>
              "<strong>{searchQuery}</strong>" 검색 결과 ({filteredProducts.length}건)
            </div>
          )}

          <div className="product-grid">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="product-card">
                <div className="product-img">
                  <img src={prod.image} alt={prod.name} />
                  <button className="add-to-cart" onClick={() => addToCart({ ...prod, quantity: 1 })}>
                    <ShoppingCart size={20} />
                  </button>
                </div>
                <div className="product-info mt-md">
                  <h4>{prod.name}</h4>
                  <p className="price">₩{prod.price.toLocaleString()}</p>
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
        </div>
      </section>

      <style>{`
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
      `}</style>
    </div>
  );
};

export default Shop;
