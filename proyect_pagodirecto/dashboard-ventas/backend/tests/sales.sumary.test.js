const { ventas } = require('../src/data');

test('summary calcula total y promedio', () => {
  const total = ventas.reduce((acc, v) => acc + v.monto, 0);
  const promedio = +(total / ventas.length).toFixed(2);

  expect(Array.isArray(ventas)).toBe(true);
  expect(ventas.length).toBe(30);
  expect(total).toBeGreaterThan(0);
  expect(promedio).toBeGreaterThan(0);
});