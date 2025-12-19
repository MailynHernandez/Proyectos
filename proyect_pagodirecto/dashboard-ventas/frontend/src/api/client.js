import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

// Guardar tokens en memoria/localStorage
let accessToken = localStorage.getItem('accessToken');
let refreshToken = localStorage.getItem('refreshToken');

api.interceptors.request.use((config) => {
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

api.interceptors.response.use(
  res => res,
  async (error) => {
    const orig = error.config;
    if (error.response?.status === 401 && refreshToken && !orig._retry) {
      orig._retry = true;
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`, { refreshToken });
        accessToken = data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        orig.headers.Authorization = `Bearer ${accessToken}`;
        return api(orig);
      } catch (e) {
        // logout suave
        accessToken = null;
        refreshToken = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
export function setTokens({ accessToken: at, refreshToken: rt }) {
  accessToken = at; refreshToken = rt;
  localStorage.setItem('accessToken', at);
  localStorage.setItem('refreshToken', rt);
}