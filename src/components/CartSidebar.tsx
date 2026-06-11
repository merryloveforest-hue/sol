import React, { useState, useEffect } from 'react';
import { X, Trash2, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const CartSidebar: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useShop();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Automatically select new items when added to cart
  useEffect(() => {
    setSelectedIds(cart.map(item => item.id));
  }, [cart.length]);

  const toggleSelect = (id: number) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const selectedItems = cart.filter(item => selectedIds.includes(item.id));
  const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          style={styles.backdrop} 
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div style={{ ...styles.sidebar, transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <div style={styles.header}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>장바구니</h2>
          <button onClick={() => setIsCartOpen(false)} style={styles.closeBtn}>
            <X size={24} />
          </button>
        </div>

        <div style={styles.content}>
          {cart.length === 0 ? (
            <p style={styles.emptyText}>장바구니가 비어있습니다.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <input 
                  type="checkbox" 
                  checked={selectedIds.includes(item.id)}
                  onChange={() => toggleSelect(item.id)}
                  style={styles.checkbox}
                />
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemInfo}>
                  <div style={styles.itemName}>{item.name}</div>
                  <div style={styles.itemPrice}>{item.price.toLocaleString()}원 x {item.quantity}</div>
                </div>
                <div style={styles.actionBtns}>
                  <button 
                    onClick={() => { alert('위시리스트에 담겼습니다! (기능 준비중)'); removeFromCart(item.id); }} 
                    style={styles.wishlistBtn}
                    title="위시리스트로 이동"
                  >
                    <Heart size={18} />
                  </button>
                  <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn} title="삭제">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div style={styles.footer}>
            <div style={styles.totalRow}>
              <span>선택상품 결제금액</span>
              <span style={styles.totalPrice}>{total.toLocaleString()}원</span>
            </div>
            <button 
              style={{...styles.checkoutBtn, opacity: selectedIds.length === 0 ? 0.5 : 1}} 
              disabled={selectedIds.length === 0}
              onClick={() => alert(`선택하신 ${selectedIds.length}개 상품 결제창으로 이동합니다!`)}
            >
              {selectedIds.length}건 구매하기
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  backdrop: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
  },
  sidebar: {
    position: 'fixed' as const,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    zIndex: 1001,
    transition: 'transform 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column' as const,
    boxShadow: '-4px 0 15px rgba(0,0,0,0.1)',
  },
  header: {
    padding: '20px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#64748b',
  },
  content: {
    flex: 1,
    overflowY: 'auto' as const,
    padding: '20px',
  },
  emptyText: {
    textAlign: 'center' as const,
    color: '#94a3b8',
    marginTop: '40px',
  },
  checkbox: {
    marginRight: '12px',
    width: '18px',
    height: '18px',
    cursor: 'pointer',
    accentColor: '#10B981',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #f1f5f9',
  },
  itemImage: {
    width: '60px',
    height: '60px',
    objectFit: 'cover' as const,
    borderRadius: '4px',
    marginRight: '12px',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: '4px',
    color: '#1e293b',
    fontSize: '14px',
  },
  itemPrice: {
    color: '#64748b',
    fontSize: '13px',
  },
  actionBtns: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  wishlistBtn: {
    background: 'none',
    border: 'none',
    color: '#ef4444', // Heart color
    cursor: 'pointer',
    padding: '4px',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: '4px',
  },
  footer: {
    padding: '24px',
    borderTop: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#10B981',
  },
  checkoutBtn: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#1E293B',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default CartSidebar;
