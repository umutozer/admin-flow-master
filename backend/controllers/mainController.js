const { Pool } = require('pg');

// DB Connection Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const mainController = {
  // DASHBOARD METRICS
  getDashboardStats: async (req, res) => {
    try {
      const userCount = await pool.query('SELECT COUNT(*) FROM users');
      const productCount = await pool.query('SELECT COUNT(*) FROM products WHERE is_active = true');
      const totalSales = await pool.query('SELECT SUM(total_amount) FROM sales');

      res.status(200).json({
        success: true,
        data: {
          totalUsers: parseInt(userCount.rows[0].count),
          activeProducts: parseInt(productCount.rows[0].count),
          totalSales: parseFloat(totalSales.rows[0].sum || 0)
        },
        message: "Dashboard verileri başarıyla getirildi."
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getSalesPerformance: async (req, res) => {
    try {
      const chartData = await pool.query(`
        SELECT TO_CHAR(created_at, 'YYYY-MM-DD') as date, SUM(total_amount) as amount 
        FROM sales 
        WHERE created_at > NOW() - INTERVAL '30 days'
        GROUP BY date ORDER BY date ASC
      `);
      res.status(200).json({ success: true, data: chartData.rows });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // USER CRUD
  getAllUsers: async (req, res) => {
    try {
      const result = await pool.query('SELECT id, email, full_name, role_id, is_active, last_login_at FROM users ORDER BY created_at DESC');
      res.status(200).json({ success: true, data: result.rows });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      const { email, full_name, password_hash, role_id } = req.body;
      const result = await pool.query(
        'INSERT INTO users (email, full_name, password_hash, role_id) VALUES ($1, $2, $3, $4) RETURNING id, email, full_name',
        [email, full_name, password_hash, role_id]
      );
      res.status(201).json({ success: true, data: result.rows[0], message: "Kullanıcı başarıyla oluşturuldu." });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { full_name, is_active } = req.body;
      await pool.query('UPDATE users SET full_name = $1, is_active = $2, updated_at = NOW() WHERE id = $3', [full_name, is_active, id]);
      res.status(200).json({ success: true, message: "Kullanıcı güncellendi." });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM users WHERE id = $1', [id]);
      res.status(200).json({ success: true, message: "Kullanıcı başarıyla silindi." });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // PRODUCT MANAGEMENT
  getAllProducts: async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT p.*, c.name as category_name 
        FROM products p 
        LEFT JOIN categories c ON p.category_id = c.id 
        ORDER BY p.created_at DESC
      `);
      res.status(200).json({ success: true, data: result.rows });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  updateProductStock: async (req, res) => {
    try {
      const { id } = req.params;
      const { stock_quantity } = req.body;
      const result = await pool.query(
        'UPDATE products SET stock_quantity = $1, updated_at = NOW() WHERE id = $2 RETURNING *',
        [stock_quantity, id]
      );
      res.status(200).json({ success: true, data: result.rows[0], message: "Stok güncellendi." });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getCategories: async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM categories');
      res.status(200).json({ success: true, data: result.rows });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};

module.exports = mainController;