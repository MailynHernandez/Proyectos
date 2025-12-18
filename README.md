# Evaluación Técnica Full Stack

Este repositorio contiene dos aplicaciones Full Stack desarrolladas con **Node.js + Express** en el backend y **React** en el frontend.  
Cada proyecto está diseñado para demostrar habilidades en arquitectura, desarrollo de APIs REST, integración con base de datos y construcción de interfaces modernas.

---

## Proyecto 1: Directorio de Contactos

### Características principales
- **Backend (API REST)**:
  - `GET /contacts` → Listar contactos (con búsqueda por query param).
  - `GET /contacts/:id` → Obtener contacto por ID.
  - `POST /contacts` → Crear nuevo contacto.
  - `PUT /contacts/:id` → Actualizar contacto existente.
  - `DELETE /contacts/:id` → Eliminar contacto.
- **Modelo de datos**: nombre, email, teléfono, empresa (opcional).
- **Frontend (React)**:
  - Pantalla principal con tabla/lista de contactos.
  - Barra de búsqueda funcional.
  - Modal/página para crear/editar contacto.
  - Botón de eliminar con confirmación.
  - Mensajes de éxito/error en las operaciones.

### Instalación
```bash
# Backend
cd proyecto1-contactos/backend
npm install
npm run dev

# Frontend
cd proyecto1-contactos/frontend
npm install
npm start

Proyecto 2: Gestor de Tareas
Características principales
Backend (API REST):

POST /auth/register → Registro de usuario.
POST /auth/login → Login con JWT.
GET /tasks → Listar tareas del usuario autenticado.
POST /tasks → Crear tarea.
PUT /tasks/:id → Actualizar tarea.
DELETE /tasks/:id → Eliminar tarea.
Modelo de datos: título, descripción, estado (pendiente/en progreso/completada), prioridad (baja/media/alta), usuario_id.

Frontend (React):
Pantallas de login y registro.
Dashboard con lista de tareas en formato Kanban o lista.
Filtros por estado y prioridad.
Formulario para crear/editar tareas.
Indicador visual de prioridad (colores).

Protección de rutas (redirigir si no hay sesión).
Instalación
bash
# Backend
cd proyecto2-tareas/backend
npm install
npm run dev

# Frontend
cd proyecto2-tareas/frontend
npm install
npm start

Tecnologías utilizadas
Backend: Node.js, Express, PostgreSQL/MongoDB, JWT, bcrypt, dotenv, cors
Frontend: React, Axios, react-router-dom
Dev Tools: Nodemon, ESLint/Prettier

Decisiones técnicas
Arquitectura separada por capas (routes, controllers, models).

API RESTful para escalabilidad y fácil integración.
Autenticación con JWT en el Proyecto 2.
Axios para consumo de API en frontend.
Scripts diferenciados para desarrollo (npm run dev) y producción (npm start).

Próximas mejoras
Validación avanzada de datos.
Tests unitarios y de integración.
Notificaciones en tiempo real (WebSockets).
Despliegue en plataformas cloud (Heroku, Vercel, Render).

Licencia
Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y compartirlo libremente, siempre dando crédito al autor.
