export default function KpiCards({ total, promedio, mejorDia }) {
  return (
    <div style={{ display:'flex', gap:16 }}>
      <div><h4>Total ventas</h4><p>{total}</p></div>
      <div><h4>Promedio diario</h4><p>{promedio}</p></div>
      <div><h4>Mejor día</h4><p>{mejorDia.fecha} (${mejorDia.monto})</p></div>
    </div>
  );
}