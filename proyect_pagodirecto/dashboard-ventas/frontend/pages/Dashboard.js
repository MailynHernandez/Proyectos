import { useEffect, useState } from 'react';
import api from '../api/client';
import KpiCards from '../components/KpiCards';
import SalesChart from '../components/SalesChart';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [kpi, setKpi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [range, setRange] = useState({ start: '', end: '' });

  const load = async () => {
    setLoading(true); setError('');
    try {
      const params = {};
      if (range.start) params.fecha_inicio = range.start;
      if (range.end) params.fecha_fin = range.end;
      const [salesRes, sumRes] = await Promise.all([
        api.get('/sales', { params }),
        api.get('/sales/summary')
      ]);
      setData(salesRes.data);
      setKpi(sumRes.data);
    } catch {
      setError('Error al cargar datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [range.start, range.end]);

  return (
    <div>
      <h2>Dashboard de Ventas</h2>

      <div style={{display:'flex', gap:8}}>
        <input type="date" value={range.start} onChange={e => setRange(r => ({...r, start: e.target.value}))} />
        <input type="date" value={range.end} onChange={e => setRange(r => ({...r, end: e.target.value}))} />
        <button onClick={load}>Actualizar</button>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      {kpi && <KpiCards total={kpi.total} promedio={kpi.promedio} mejorDia={kpi.mejorDia} />}
      <SalesChart data={data} />
    </div>
  );
}