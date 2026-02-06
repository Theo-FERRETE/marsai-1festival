const { loginSchema } = require('../validators/auth.validator.js');
const { loginAdmin } = require('../services/auth.service.js');

async function login(req, res) {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: 'Invalid request body',
        details: parsed.error.flatten(),
      });
    }

    const { email, password } = parsed.data;

    const result = await loginAdmin(email, password);
    if (!result) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    return res.status(200).json(result);
  } catch (e) {
    console.error('login error:', e);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { login };
