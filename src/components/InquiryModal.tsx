import React, { useState } from 'react';
import { X } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: 'custom', // 'custom' | 'shipping' | 'other'
    title: '',
    content: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send formData to a backend API here
    alert('문의가 성공적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container fade-in" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="serif">1:1 문의하기</h3>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="modal-body">
          <p className="text-muted mb-lg">작품 주문 제작 및 배송 관련 문의를 남겨주시면 신속하게 답변해 드립니다.</p>
          
          <form onSubmit={handleSubmit} className="inquiry-form">
            <div className="form-group">
              <label htmlFor="name">성함 (Name)</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="홍길동" />
            </div>
            
            <div className="form-group">
              <label htmlFor="contact">연락처 또는 이메일 (Contact / Email)</label>
              <input type="text" id="contact" name="contact" required value={formData.contact} onChange={handleChange} placeholder="010-0000-0000 또는 email@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="type">문의 유형 (Inquiry Type)</label>
              <select id="type" name="type" value={formData.type} onChange={handleChange}>
                <option value="custom">작품 주문 제작 문의</option>
                <option value="shipping">배송 관련 문의</option>
                <option value="other">기타 문의</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="title">제목 (Title)</label>
              <input type="text" id="title" name="title" required value={formData.title} onChange={handleChange} placeholder="문의 제목을 입력해주세요" />
            </div>
            
            <div className="form-group">
              <label htmlFor="content">내용 (Content)</label>
              <textarea id="content" name="content" required rows={5} value={formData.content} onChange={handleChange} placeholder="문의하실 내용을 자세히 적어주세요."></textarea>
            </div>
            
            <div className="modal-actions mt-lg">
              <button type="button" className="btn btn-outline" onClick={onClose}>취소</button>
              <button type="submit" className="btn btn-primary" style={{ marginLeft: '12px' }}>문의 접수</button>
            </div>
          </form>
        </div>
      </div>
      
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: var(--spacing-md);
        }
        
        .modal-container {
          background-color: var(--bg-white);
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border);
        }
        
        .modal-close {
          color: var(--text-muted);
        }
        
        .modal-close:hover {
          color: var(--text-main);
        }
        
        .modal-body {
          padding: var(--spacing-lg);
        }
        
        .mb-lg {
          margin-bottom: var(--spacing-lg);
        }
        
        .inquiry-form .form-group {
          margin-bottom: var(--spacing-md);
        }
        
        .inquiry-form label {
          display: block;
          font-weight: 500;
          margin-bottom: var(--spacing-xs);
          font-size: 14px;
        }
        
        .inquiry-form input,
        .inquiry-form select,
        .inquiry-form textarea {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
          transition: var(--transition);
          background-color: #fafafa;
        }
        
        .inquiry-form input:focus,
        .inquiry-form select:focus,
        .inquiry-form textarea:focus {
          outline: none;
          border-color: var(--brand-primary);
          background-color: var(--bg-white);
          box-shadow: 0 0 0 2px rgba(0, 98, 65, 0.1);
        }
        
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--border);
        }
      `}</style>
    </div>
  );
};

export default InquiryModal;
