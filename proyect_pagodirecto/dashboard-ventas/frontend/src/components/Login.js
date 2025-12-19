import { useState } from 'react';
import api, { setTokens } from '../api/client';

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const { data } = await api.post('/auth/login', { email, password });
      setTokens(data);
      onSuccess();
    } catch {
      setError('Error de login'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button disabled={loading}>{loading ? 'Ingresando...' : 'Entrar'}</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  );
}