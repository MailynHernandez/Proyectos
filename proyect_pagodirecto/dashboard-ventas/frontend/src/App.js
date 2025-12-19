import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';

export default function App() {
  const [logged, setLogged] = useState(!!localStorage.getItem('accessToken'));
  return (
    <div style={{ padding: 16 }}>
      {logged ? (
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      ) : (
        <Login onSuccess={() => setLogged(true)} />
      )}
    </div>
  );
}