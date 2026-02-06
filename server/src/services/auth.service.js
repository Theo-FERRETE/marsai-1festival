const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL missing in environment');
}

const pool = mysql.createPool(databaseUrl);

async function loginAdmin(email, password) {
  const [rows] = await pool.query(
    'SELECT id, email, role, password FROM users WHERE email = ? LIMIT 1',
    [email]
  );
  const user = rows && rows[0];
  if (!user) return null;
  if (user.role !== 'ADMIN') return null;

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return null;

  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET missing in .env');

  const token = jwt.sign(
    { sub: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  return { token, user: { id: user.id, email: user.email, role: user.role } };
}

module.exports = { loginAdmin };
