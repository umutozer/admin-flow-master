-- ROLES
INSERT INTO roles (name, permissions) VALUES
('admin', '["users:read","users:write","products:read","products:write","analytics:read","settings:read","settings:write"]'),
('manager', '["users:read","products:read","products:write","analytics:read"]'),
('viewer', '["products:read","analytics:read"]');

-- USERS
INSERT INTO users (email, password_hash, full_name, role_id, is_active) VALUES
('admin@example.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin User', 1, true),
('manager@example.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Manager User', 2, true),
('viewer@example.com', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Viewer User', 3, true);

-- CATEGORIES
INSERT INTO categories (name, slug, description) VALUES
('Elektronik', 'elektronik', 'Cep telefonu, bilgisayar, tablet vb.'),
('Ev Gereçleri', 'ev-gerecleri', 'Mutfak ve ev aletleri'),
('Giyim', 'giyim', 'Kadın ve erkek giyim'),
('Kitap', 'kitap', 'Roman, ders, çocuk kitapları');

-- PRODUCTS
INSERT INTO products (sku, name, description, price, stock_quantity, category_id, is_active) VALUES
('IPH15-128', 'iPhone 15 128GB', 'Apple iPhone 15, 128 GB depolama', 42999.00, 25, 1, true),
('SAMS-A54', 'Samsung Galaxy A54', 'Samsung orta segment akıllı telefon', 11999.00, 40, 1, true),
('HP-LAP15', 'HP Laptop 15-dy5000', 'Intel i5, 8GB RAM, 512GB SSD', 15999.00, 15, 1, true),
('TEF-EV1', 'Tefal Buharlı Ütü', '2400W, seramik taban', 1299.00, 60, 2, true),
('BEKO-W10', 'Beko Çamaşır Makinesi', '10 kg kapasite, A+++ enerji', 8999.00, 12, 2, true),
('ZARA-MT', 'Zara Basic T-Shirt', '%100 pamuk, slim fit', 299.00, 200, 3, true),
('NOKIA-105', 'Nokia 105', 'Klasik tuşlu telefon', 499.00, 100, 1, true),
('HOB-BOOK', 'Hobbit', 'J.R.R. Tolkien fantastik roman', 89.00, 150, 4, true);

-- SALES
INSERT INTO sales (user_id, total_amount, status) VALUES
(2, 85998.00, 'completed'),
(2, 24998.00, 'completed'),
(3, 1299.00, 'completed'),
(2, 8999.00, 'completed');

-- SALE ITEMS
INSERT INTO sale_items (sale_id, product_id, quantity, unit_price) VALUES
(1, 1, 2, 42999.00),
(2, 3, 1, 15999.00),
(2, 2, 1, 11999.00),
(3, 4, 1, 1299.00),
(4, 5, 1, 8999.00);

-- NOTIFICATIONS
INSERT INTO notifications (user_id, title, message, type, is_read) VALUES
(1, 'Yeni sipariş', '2 adet iPhone 15 satıldı', 'info', false),
(2, 'Stok uyarısı', 'HP Laptop stoğu 5 altına düştü', 'warning', false),
(1, 'Sistem güncellemesi', 'Yeni özellikler eklendi', 'success', true);

-- ACTIVITY LOGS
INSERT INTO activity_logs (user_id, action, entity_type, entity_id, payload) VALUES
(1, 'user.create', 'users', 2, '{"email":"manager@example.com"}'),
(2, 'product.update', 'products', 1, '{"stock_quantity":25}'),
(2, 'sale.create', 'sales', 1, '{"total_amount":85998}'),
(3, 'product.view', 'products', 4, NULL);