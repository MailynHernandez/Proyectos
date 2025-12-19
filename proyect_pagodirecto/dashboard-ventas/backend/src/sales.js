const express = require('express');
const { ventas } = require('./data');
const { get, set } = require('./cache');

const router = express.Router();

router.get('/', (req, res) => {
  const { fecha_inicio, fecha_fin } = req.query;
  let data = ventas;
  if (fecha_inicio) data = data.filter(v => v.fecha >= fecha_inicio);
  if (fecha_fin) data = data.filter(v => v.fecha <= fecha_fin);
  res.json(data);
});

router.get('/summary', (req, res) => {
  const cacheKey = 'summary';
  const cached = get(cacheKey);
  if (cached) return res.json(cached);

  const total = ventas.reduce((acc, v) => acc + v.monto, 0);
  const promedio = +(total / ventas.length).toFixed(2);
  const mejorDia = ventas.reduce((best, v) => v.monto > best.monto ? v : best, ventas[0]);

  const result = { total, promedio, mejorDia };
  set(cacheKey, result, 60_000); // 60 segundos
  res.json(result);
});

module.exports = { router };