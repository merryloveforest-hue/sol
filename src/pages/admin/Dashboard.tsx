import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h3 style={{ marginTop: 0 }}>대시보드 홈</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '24px' }}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>총 가입 회원</div>
          <div style={styles.cardNumber}>0 명</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>새로운 문의</div>
          <div style={styles.cardNumber}>0 건</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitle}>새로운 리뷰</div>
          <div style={styles.cardNumber}>0 건</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
  },
  cardTitle: {
    color: '#64748b',
    fontSize: '14px',
    marginBottom: '8px',
  },
  cardNumber: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#1e293b',
  }
};

export default Dashboard;
