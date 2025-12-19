markdown

# Proyecto 2: Gestor de Tareas

Aplicación Full Stack para la gestión de tareas personales, desarrollada con **Node.js + Express** en el backend y **React** en el frontend.  
Incluye autenticación con JWT, protección de rutas y un dashboard estilo Kanban.

---

## Características principales

- **Backend (API REST)**:
  - `POST /auth/register` → Registro de usuario.
  - `POST /auth/login` → Login con JWT.
  - `GET /tasks` → Listar tareas del usuario autenticado.
  - `POST /tasks` → Crear nueva tarea.
  - `PUT /tasks/:id` → Actualizar tarea existente.
  - `DELETE /tasks/:id` → Eliminar tarea.

- **Modelo de datos**:
  - `titulo` (string, requerido)
  - `descripcion` (string, opcional)
  - `estado` (pendiente / en progreso / completada)
  - `prioridad` (baja / media / alta)
  - `usuario_id` (relación con usuario)

- **Frontend (React)**:
  - Pantallas de login y registro.
  - Dashboard con lista de tareas en formato **Kanban** o lista.
  - Filtros por estado y prioridad.
  - Formulario para crear/editar tareas.
  - Indicador visual de prioridad (colores).
  - Protección de rutas (redirigir si no hay sesión activa).


## Tecnologías utilizadas

- **Backend**: Node.js, Express, PostgreSQL/MongoDB, JWT, bcrypt, dotenv, cors
- **Frontend**: React, Axios, react-router-dom
- **Dev Tools**: Nodemon, ESLint/Prettier

---

## Instalación y ejecución

### 1. Clonar el repositorio
git clone https://github.com/usuario/gestor-tareas.git
cd gestor-tareas

### 2. Configurar el backend
bash
cd backend
npm install
npm run dev   # o npm start
Crear archivo .env:
Código
PORT=4000
DB_URL=postgres://postgres:Vale*8092@localhost:5432/gestor_tareas
JWT_SECRET=Vale*8092
El backend estará disponible en http://localhost:4000.

### 3. Configurar el frontend
bash
cd ../frontend
npm install
npm start
El frontend estará disponible en http://localhost:3000

## Uso
Regístrate o inicia sesión en la aplicación.
Accede al dashboard para visualizar tus tareas.
Crea, edita o elimina tareas según tu necesidad.
Filtra por estado o prioridad para organizar tu trabajo.
Observa el tablero Kanban para gestionar el flujo de tareas.

## Decisiones técnicas
Autenticación con JWT para seguridad y escalabilidad.
Middleware para proteger rutas en el backend.
Uso de react-router-dom para proteger rutas en el frontend.
Axios para consumo de API.
Arquitectura separada por capas (routes, controllers, models).

## Próximas mejoras
Tests unitarios y de integración.
Notificaciones en tiempo real (WebSockets).
Integración con servicios externos (ejemplo: Google Calendar).
Despliegue en plataformas cloud (Heroku, Vercel, Render).

## Licencia
Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y compartirlo libremente, siempre dando crédito al autor.