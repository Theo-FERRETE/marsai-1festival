require('dotenv').config();
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL missing in environment');
}

const pool = mysql.createPool(databaseUrl);

async function main() {
  const adminEmail = 'admin@marsai.local';
  const adminPassword = 'Admin123!';
  const adminName = 'Admin marsAI';

  const [rows] = await pool.query(
    'SELECT id FROM users WHERE email = ? LIMIT 1',
    [adminEmail]
  );
  const existing = rows && rows[0];
  if (existing) {
    console.log("✅ L'admin existe déjà.");
    return;
  }

  const hashed = await bcrypt.hash(adminPassword, 10);

  await pool.query(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [adminName, adminEmail, hashed, 'ADMIN']
  );

  console.log('✅ Admin créé');
}

main()
  .catch((e) => {
    console.error('❌ createAdmin error:', e?.message || e);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
  });
