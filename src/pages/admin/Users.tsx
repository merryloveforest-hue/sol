import React from 'react';

const Users: React.FC = () => {
  return (
    <div style={styles.container}>
      <h3 style={{ marginTop: 0 }}>가입 회원 관리</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>이메일</th>
            <th style={styles.th}>가입일</th>
            <th style={styles.th}>권한</th>
            <th style={styles.th}>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} style={{ textAlign: 'center', padding: '20px', color: '#94a3b8' }}>
              연동 중입니다... (데이터베이스 구축 후 표시됨)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e2e8f0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: '16px',
  },
  th: {
    textAlign: 'left' as const,
    padding: '12px',
    borderBottom: '2px solid #e2e8f0',
    color: '#475569',
    fontWeight: 'bold',
  }
};

export default Users;
