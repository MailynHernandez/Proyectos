const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Simulación de usuarios
const USERS = [{ id: 1, email: 'admin@example.com', password: 'admin123' }];

function signAccess(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });
}
function signRefresh(payload) {
  return jwt.sign(payload, process.env.REFRESH_SECRET, { expiresIn: '7d' });
}

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = USERS.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

  const accessToken = signAccess({ sub: user.id });
  const refreshToken = signRefresh({ sub: user.id });
  res.json({ accessToken, refreshToken });
});

router.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(400).json({ error: 'Falta refreshToken' });
  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const accessToken = signAccess({ sub: payload.sub });
    res.json({ accessToken });
  } catch {
    res.status(401).json({ error: 'Refresh token inválido' });
  }
});

// Middleware para proteger rutas
function authenticate(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ error: 'Sin token' });
  const token = auth.slice(7);
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido o vencido' });
  }
}

module.exports = { router, authenticate };