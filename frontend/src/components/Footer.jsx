import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '1.5rem 2rem',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.875rem',
      color: 'var(--text-muted)',
      marginTop: 'auto'
    }}>
      <p>© {new Date().getFullYear()} AdminFlow Kontrol Paneli v1.0.4</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Yardım Merkezi</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Gizlilik Politikası</a>
        <a href="#" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Sistem Durumu: Normal</a>
      </div>
    </footer>
  );
};

export default Footer;