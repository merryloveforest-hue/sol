import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // First try to sign in
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      // If sign in fails, try to sign up (for demo purposes we combine them, but in production they should be separate)
      if (signInError.message.includes('Invalid login credentials')) {
         const { error: signUpError } = await supabase.auth.signUp({
            email,
            password,
         });
         if (signUpError) {
             setError(signUpError.message);
         } else {
             alert('회원가입 확인 이메일이 발송되었습니다. 이메일을 확인해주세요.');
         }
      } else {
         setError(signInError.message);
      }
    } else {
      navigate('/admin');
    }
    
    setLoading(false);
  };

  const handleOAuthLogin = async (provider: 'google' | 'kakao') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/admin`
      }
    });
    if (error) setError(error.message);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>로그인</h2>
        <p style={styles.subtitle}>솔빛공방 관리자 및 회원 로그인</p>
        
        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleEmailLogin} style={styles.form}>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? '처리중...' : '이메일로 계속하기'}
          </button>
        </form>

        <div style={styles.divider}>
          <span style={styles.dividerText}>또는</span>
        </div>

        <button onClick={() => handleOAuthLogin('google')} style={{...styles.socialBtn, ...styles.googleBtn}}>
          구글로 로그인
        </button>
        <button onClick={() => handleOAuthLogin('kakao')} style={{...styles.socialBtn, ...styles.kakaoBtn}}>
          카카오로 로그인
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f7f9',
    fontFamily: '"Pretendard", sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    color: '#1e293b',
  },
  subtitle: {
    margin: '0 0 24px 0',
    color: '#64748b',
    textAlign: 'center' as const,
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '15px',
    outline: 'none',
  },
  button: {
    padding: '12px',
    backgroundColor: '#1E293B',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  divider: {
    margin: '24px 0',
    textAlign: 'center' as const,
    position: 'relative' as const,
  },
  dividerText: {
    backgroundColor: '#fff',
    padding: '0 10px',
    color: '#94a3b8',
    fontSize: '13px',
    position: 'relative' as const,
    zIndex: 1,
  },
  socialBtn: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '12px',
  },
  googleBtn: {
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #e2e8f0',
  },
  kakaoBtn: {
    backgroundColor: '#FEE500',
    color: '#000000',
  },
  error: {
    backgroundColor: '#fee2e2',
    color: '#ef4444',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '16px',
    fontSize: '14px',
  }
};

export default Login;
