import React, { useState } from 'react';

// Type definitions
interface Post {
  id: number;
  prefix: string; // 상품, 배송, 교환, 반품, 기타
  title: string;
  writer: string;
  content: string;
  date: string;
}

const INITIAL_POSTS: Post[] = [
  {
    id: 2,
    prefix: '배송',
    title: '배송은 얼마나 걸리나요?',
    writer: 'kim**',
    content: '주문했는데 언제쯤 받을 수 있을까요?',
    date: '2026.06.03',
  },
  {
    id: 1,
    prefix: '상품',
    title: '텀블러 재질이 궁금합니다.',
    writer: 'lee**',
    content: '환경호르몬 없는 소재인가요?',
    date: '2026.06.01',
  }
];

const Board: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [currentView, setCurrentView] = useState<'list' | 'write' | 'detail'>('list');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    prefix: '상품',
    writer: '',
    password: '',
    title: '',
    content: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWriteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
      prefix: formData.prefix,
      title: formData.title || `${formData.prefix} 관련 문의입니다.`, // If user forgets title
      writer: formData.writer,
      content: formData.content,
      date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\. /g, '.').replace(/\.$/, '')
    };
    
    setPosts([newPost, ...posts]);
    setCurrentView('list');
    setFormData({ prefix: '상품', writer: '', password: '', title: '', content: '' });
    alert('게시물이 등록되었습니다.');
  };

  const viewDetail = (post: Post) => {
    setSelectedPost(post);
    setCurrentView('detail');
  };

  return (
    <div className="board-container">
      {currentView === 'list' && (
        <div className="board-list fade-in">
          <div className="board-header">
            <h3 className="serif">고객 문의 게시판</h3>
            <button className="btn btn-primary" onClick={() => setCurrentView('write')}>
              글쓰기
            </button>
          </div>
          
          <div className="board-table-wrap mt-md">
            <table className="board-table">
              <thead>
                <tr>
                  <th width="10%">번호</th>
                  <th width="15%">말머리</th>
                  <th width="45%">제목</th>
                  <th width="15%">작성자</th>
                  <th width="15%">작성일</th>
                </tr>
              </thead>
              <tbody>
                {posts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-xl">등록된 게시물이 없습니다.</td>
                  </tr>
                ) : (
                  posts.map((post, idx) => (
                    <tr key={post.id} onClick={() => viewDetail(post)} className="clickable-row">
                      <td className="text-center">{posts.length - idx}</td>
                      <td className="text-center">[{post.prefix}]</td>
                      <td>{post.title}</td>
                      <td className="text-center">{post.writer}</td>
                      <td className="text-center">{post.date}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {currentView === 'write' && (
        <div className="board-write fade-in">
          <div className="board-header">
            <h3 className="serif">문의 글쓰기</h3>
          </div>
          
          <form className="board-form mt-md" onSubmit={handleWriteSubmit}>
            <div className="form-row split-row">
              <div className="form-group">
                <label>말머리 (Category)</label>
                <select name="prefix" value={formData.prefix} onChange={handleFormChange}>
                  <option value="상품">상품</option>
                  <option value="배송">배송</option>
                  <option value="교환">교환</option>
                  <option value="반품">반품</option>
                  <option value="기타">기타</option>
                </select>
              </div>
            </div>

            <div className="form-row split-row">
              <div className="form-group">
                <label>아이디 (ID)</label>
                <input type="text" name="writer" value={formData.writer} onChange={handleFormChange} required placeholder="아이디 입력" />
              </div>
              <div className="form-group">
                <label>비밀번호 (Password)</label>
                <input type="password" name="password" value={formData.password} onChange={handleFormChange} required placeholder="비밀번호 입력" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>제목 (Title)</label>
                <input type="text" name="title" value={formData.title} onChange={handleFormChange} required placeholder="제목을 입력해주세요" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>내용 (Content)</label>
                <textarea name="content" value={formData.content} onChange={handleFormChange} required rows={8} placeholder="내용을 자세히 적어주세요."></textarea>
              </div>
            </div>

            <div className="board-actions mt-lg">
              <button type="button" className="btn btn-outline" onClick={() => setCurrentView('list')}>취소</button>
              <button type="submit" className="btn btn-primary ml-sm">등록하기</button>
            </div>
          </form>
        </div>
      )}

      {currentView === 'detail' && selectedPost && (
        <div className="board-detail fade-in">
          <div className="detail-header">
            <span className="prefix-badge">[{selectedPost.prefix}]</span>
            <h3 className="serif mt-sm">{selectedPost.title}</h3>
            <div className="detail-meta mt-md text-muted">
              <span>작성자: {selectedPost.writer}</span>
              <span className="ml-md">작성일: {selectedPost.date}</span>
            </div>
          </div>
          
          <div className="detail-body mt-lg">
            {selectedPost.content.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>

          <div className="board-actions mt-xl border-top pt-md">
            <button className="btn btn-outline" onClick={() => setCurrentView('list')}>목록으로</button>
          </div>
        </div>
      )}

      <style>{`
        .board-container {
          background: var(--bg-white);
          border-radius: 12px;
          padding: var(--spacing-xl);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .board-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: var(--spacing-md);
          border-bottom: 2px solid var(--brand-deep);
        }

        /* Table Styles */
        .board-table-wrap {
          overflow-x: auto;
        }
        
        .board-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .board-table th {
          background-color: var(--brand-light);
          padding: 12px 16px;
          font-weight: 600;
          color: var(--brand-deep);
          border-bottom: 1px solid var(--border);
        }

        .board-table td {
          padding: 16px;
          border-bottom: 1px solid var(--border);
          transition: var(--transition);
        }

        .clickable-row {
          cursor: pointer;
        }
        
        .clickable-row:hover td {
          background-color: #fafafa;
          color: var(--brand-primary);
        }

        .py-xl { padding-top: 40px; padding-bottom: 40px; }

        /* Form Styles */
        .board-form .form-row {
          margin-bottom: var(--spacing-md);
        }

        .board-form .split-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .board-form label {
          display: block;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 8px;
          color: var(--brand-deep);
        }

        .board-form input, 
        .board-form select, 
        .board-form textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          background-color: #fafafa;
          transition: var(--transition);
        }

        .board-form input:focus, 
        .board-form select:focus, 
        .board-form textarea:focus {
          outline: none;
          border-color: var(--brand-primary);
          background-color: var(--bg-white);
          box-shadow: 0 0 0 2px rgba(0, 98, 65, 0.1);
        }

        /* Detail Styles */
        .detail-header {
          padding-bottom: var(--spacing-lg);
          border-bottom: 1px solid var(--border);
        }

        .prefix-badge {
          display: inline-block;
          background: var(--brand-light);
          color: var(--brand-primary);
          padding: 4px 12px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
        }

        .detail-meta span {
          font-size: 14px;
        }

        .detail-body {
          min-height: 200px;
          line-height: 1.8;
          font-size: 16px;
        }

        /* Utility */
        .board-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        
        .border-top { border-top: 1px solid var(--border); }
        .pt-md { padding-top: var(--spacing-md); }
        .ml-sm { margin-left: var(--spacing-sm); }
        .ml-md { margin-left: var(--spacing-md); }

        @media (max-width: 768px) {
          .board-form .split-row {
            grid-template-columns: 1fr;
          }
          .board-table th:nth-child(1), .board-table td:nth-child(1),
          .board-table th:nth-child(4), .board-table td:nth-child(4) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Board;
