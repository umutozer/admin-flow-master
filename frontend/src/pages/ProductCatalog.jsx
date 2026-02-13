import React from 'react';
import { Package, Plus, Filter, Tag } from 'lucide-react';

const ProductCatalog = () => {
  const products = [
    { id: 1, name: 'Pro Kablosuz Klavye', category: 'Elektronik', price: '₺1.200', stock: 45 },
    { id: 2, name: 'Ergonomik Mouse', category: 'Elektronik', price: '₺450', stock: 12 },
    { id: 3, name: '4K Monitör 27"', category: 'Ekipman', price: '₺8.900', stock: 8 },
    { id: 4, name: 'Yazıcı Kartuşu Black', category: 'Sarf Malzeme', price: '₺750', stock: 120 },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)' }}>Ürün Kataloğu</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--surface)', cursor: 'pointer' }}>
            <Filter size={18} /> Filtrele
          </button>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={18} /> Ürün Ekle
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {products.map(product => (
          <div key={product.id} className="card" style={{ position: 'relative' }}>
            <div style={{ width: '100%', height: '140px', background: 'var(--bg)', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Package size={48} color="var(--text-muted)" strokeWidth={1} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase' }}>{product.category}</p>
                <h3 style={{ fontSize: '1.1rem', margin: '4px 0' }}>{product.name}</h3>
              </div>
              <Tag size={18} color="var(--text-muted)" />
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--secondary)' }}>{product.price}</span>
              <span style={{ fontSize: '0.875rem', color: product.stock < 15 ? '#ef4444' : 'var(--text-muted)' }}>
                Stok: {product.stock} adet
              </span>
            </div>
            <button style={{ width: '100%', marginTop: '1.25rem', padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--primary)', color: 'var(--primary)', background: 'none', cursor: 'pointer', fontWeight: '600' }}>
              Detayları Görüntüle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;