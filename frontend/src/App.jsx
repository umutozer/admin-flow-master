import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Box, Bell, Sun, Moon, Search, LogOut } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import ProductCatalog from './pages/ProductCatalog';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  return (
    <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <aside className="sidebar">
        <div className="logo-area">
          <div className="logo-icon">AF</div>
          <span className="logo-text">AdminFlow</span>
        </div>
        <nav className="side-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/users" className={location.pathname === '/users' ? 'active' : ''}>
            <Users size={20} /> Kullanıcılar
          </Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
            <Box size={20} /> Ürünler
          </Link>
        </nav>
        <div className="sidebar-footer">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-toggle">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? 'Açık Mod' : 'Koyu Mod'}</span>
          </button>
        </div>
      </aside>
      
      <main className="main-content">
        <Header />
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/products" element={<ProductCatalog />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;