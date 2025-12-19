export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('accessToken');
  if (!token) return <p>Sesión no iniciada</p>;
  return children;
}