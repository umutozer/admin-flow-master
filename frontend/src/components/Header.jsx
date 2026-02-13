import React from 'react';
import { Bell, Search, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header style={{
      height: '70px',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ position: 'relative', width: '300px' }}>
        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input 
          type="text" 
          placeholder="Sistemde ara..." 
          style={{
            width: '100%',
            padding: '10px 10px 10px 40px',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            background: 'var(--bg)',
            color: 'var(--text-main)',
            outline: 'none'
          }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={22} color="var(--text-muted)" />
          <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '20px', borderLeft: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Admin Kullanıcı</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Süper Yönetici</p>
          </div>
          <UserCircle size={35} color="var(--primary)" />
        </div>
      </div>
    </header>
  );
};

export default Header;