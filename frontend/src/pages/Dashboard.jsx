import React from 'react';
import { TrendingUp, Users, ShoppingBag, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Pzt', satis: 4000 },
  { name: 'Sal', satis: 3000 },
  { name: 'Çar', satis: 5000 },
  { name: 'Per', satis: 2780 },
  { name: 'Cum', satis: 1890 },
  { name: 'Cmt', satis: 2390 },
  { name: 'Paz', satis: 3490 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-fade">
      <h1 style={{ marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Sisteme Hoş Geldiniz</h1>
      
      <div className="stat-grid">
        <div className="card stat-card">
          <div className="stat-icon"><Users size={24} /></div>
          <div className="stat-info">
            <h3>Toplam Kullanıcı</h3>
            <p>1,284</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-icon" style={{ color: 'var(--accent)', background: 'rgba(16, 185, 129, 0.1)' }}><TrendingUp size={24} /></div>
          <div className="stat-info">
            <h3>Toplam Satış</h3>
            <p>₺42.500</p>
          </div>
        </div>
        <div className="card stat-card">
          <div className="stat-icon" style={{ color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)' }}><ShoppingBag size={24} /></div>
          <div className="stat-info">
            <h3>Aktif Ürünler</h3>
            <p>452</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Haftalık Performans</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--text-muted)" />
                <YAxis stroke="var(--text-muted)" />
                <Tooltip contentStyle={{ background: 'var(--surface)', borderColor: 'var(--border)' }} />
                <Bar dataKey="satis" fill="var(--primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Son Aktiviteler</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[ 
              { user: 'Zeynep Kaya', action: 'Yeni ürün ekledi', time: '2dk önce' },
              { user: 'Can Demir', action: 'Stok güncelledi', time: '15dk önce' },
              { user: 'Merve Aras', action: 'Kullanıcı yetkisi değiştirdi', time: '1sa önce' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginTop: '6px' }}></div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>{item.user}</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{item.action}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;