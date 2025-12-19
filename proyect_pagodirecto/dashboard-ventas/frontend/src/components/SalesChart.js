import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SalesChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="monto" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="fecha" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}