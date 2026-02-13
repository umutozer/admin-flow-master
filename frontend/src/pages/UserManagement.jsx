import React from 'react';
import { MoreVertical, UserPlus, Shield, Mail } from 'lucide-react';

const UserManagement = () => {
  const users = [
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@adminflow.com', role: 'Yönetici', status: 'Aktif' },
    { id: 2, name: 'Selin Yıldız', email: 'selin@adminflow.com', role: 'Editör', status: 'Aktif' },
    { id: 3, name: 'Burak Efe', email: 'burak@adminflow.com', role: 'İzleyici', status: 'Askıda' },
    { id: 4, name: 'Elif Can', email: 'elif@adminflow.com', role: 'Yönetici', status: 'Aktif' },
  ];

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)' }}>Kullanıcı Yönetimi</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Sistemdeki tüm kullanıcıları yönetin ve yetkilendirin.</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserPlus size={18} /> Yeni Kullanıcı
        </button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Kullanıcı</th>
            <th>Rol</th>
            <th>Durum</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontWeight: 'bold' }}>{user.name[0]}</div>
                  <div>
                    <p style={{ fontWeight: '600' }}>{user.name}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.875rem' }}>
                  <Shield size={14} color="var(--primary)" /> {user.role}
                </div>
              </td>
              <td>
                <span className={`badge ${user.status === 'Aktif' ? 'badge-success' : ''}`} 
                      style={user.status !== 'Aktif' ? { background: '#fee2e2', color: '#b91c1c' } : {}}>
                  {user.status}
                </span>
              </td>
              <td>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <MoreVertical size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;