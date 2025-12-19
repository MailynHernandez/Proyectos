// Genera ventas últimos 30 días
const DAYS = 30;
const today = new Date();
const toISODate = (d) => new Date(d).toISOString().split('T')[0];

const ventas = Array.from({ length: DAYS }, (_, i) => {
  const date = new Date(today);
  date.setDate(today.getDate() - i);
  return {
    fecha: toISODate(date),
    monto: Math.floor(Math.random() * 500) + 50
  };
}).reverse(); // orden ascendente por fecha

module.exports = { ventas };