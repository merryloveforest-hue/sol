import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
        return;
      }
      
      // Check if user has admin role (optional, for now we just check if logged in)
      setLoading(false);
    };
    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>솔빛공방 Admin</div>
        <nav style={styles.nav}>
          <Link to="/admin" style={{ ...styles.link, ...(location.pathname === '/admin' ? styles.activeLink : {}) }}>대시보드</Link>
          <Link to="/admin/users" style={{ ...styles.link, ...(location.pathname === '/admin/users' ? styles.activeLink : {}) }}>회원 관리</Link>
          <Link to="/admin/inquiries" style={{ ...styles.link, ...(location.pathname === '/admin/inquiries' ? styles.activeLink : {}) }}>문의 관리</Link>
        </nav>
        <button onClick={handleLogout} style={styles.logoutBtn}>로그아웃</button>
      </aside>
      <main style={styles.main}>
        <header style={styles.header}>
          <h2>관리자 모드</h2>
        </header>
        <div style={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f5f7f9',
    fontFamily: '"Pretendard", sans-serif',
  },
  sidebar: {
    width: '240px',
    backgroundColor: '#1E293B',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  logo: {
    padding: '24px',
    fontSize: '20px',
    fontWeight: 'bold',
    borderBottom: '1px solid #334155',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
    padding: '16px 0',
  },
  link: {
    color: '#94A3B8',
    textDecoration: 'none',
    padding: '12px 24px',
    transition: '0.2s',
  },
  activeLink: {
    backgroundColor: '#334155',
    color: '#fff',
    borderLeft: '4px solid #10B981', // Deep green/emerald
  },
  logoutBtn: {
    margin: '24px',
    padding: '10px',
    backgroundColor: 'transparent',
    border: '1px solid #475569',
    color: '#cbd5e1',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    backgroundColor: '#fff',
    height: '64px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
  },
  content: {
    padding: '24px',
    flex: 1,
  }
};

export default AdminLayout;
