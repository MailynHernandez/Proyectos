# Proyectos
Prueba técnica de sistemas
# Directorio de Contactos
Aplicación Full Stack para la gestión de contactos, desarrollada como parte de una evaluación técnica.  
Incluye un **backend en Node.js con Express** y un **frontend en React**, con persistencia en base de datos (PostgreSQL)

## Características principales

- **Backend (API REST)**:
  - `GET /contacts` → Listar contactos (con búsqueda por query param).
  - `GET /contacts/:id` → Obtener contacto por ID.
  - `POST /contacts` → Crear nuevo contacto.
  - `PUT /contacts/:id` → Actualizar contacto existente.
  - `DELETE /contacts/:id` → Eliminar contacto.

- **Modelo de datos**:
  - `nombre` (string, requerido)
  - `email` (string, requerido)
  - `teléfono` (string, requerido)
  - `empresa` (string, opcional)

- **Frontend (React)**:
  - Pantalla principal con tabla/lista de contactos.
  - Barra de búsqueda funcional.
  - Modal o página para crear/editar contacto.
  - Botón de eliminar con confirmación.
  - Mensajes de éxito/error en las operaciones.

---

## Tecnologías utilizadas

- **Backend**: Node.js, Express
- **Frontend**: React (Create React App o Next.js)
- **Base de datos**: PostgreSQL / MongoDB / SQLite
- **Herramientas adicionales**: Axios para consumo de API, dotenv para configuración, ESLint/Prettier para estilo de código.

---

## Instalación y ejecución

### 1. Clonar el repositorio
bash 
git clone https://github.com/usuario/directorio-contactos.git
cd directorio-contactos
### 2. Configurar el backend
bash
cd backend
npm install
npm run dev
#### Crear archivo .env con variables de entorno:
PORT=4000
DB_URL=postgres://usuario:postgres@Vale*8092:5432/contactos
### 3. Configurar el frontend
bash
cd frontend
npm install
npm start
El frontend estará disponible en http://localhost:3000 y el backend en http://localhost:4000.
## Decisiones técnicas
Se implementó una arquitectura separada por capas (controladores, servicios, modelos).
Se utilizó RESTful API para garantizar escalabilidad y facilidad de integración.
Se añadió manejo de errores centralizado en el backend.
El frontend utiliza componentes reutilizables para formularios y tablas.
## USO
Accede al frontend en el navegador.
Usa la barra de búsqueda para filtrar contactos.
Crea, edita o elimina contactos desde la interfaz.
Verifica mensajes de confirmación o error en cada operación.
## Próximas mejoras
Validación avanzada de datos (ejemplo: formato de email).
Autenticación de usuarios para proteger el acceso.
Tests unitarios y de integración.
Despliegue en plataforma cloud (Heroku, Vercel, Render).
## Licencia
Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y compartirlo libremente, siempre dando crédito al autor.