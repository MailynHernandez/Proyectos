# Proyecto 2: Gestor de Tareas – Documentación de Endpoints

Este documento describe los principales **endpoints del backend** del Gestor de Tareas.  
La API está construida con **Node.js + Express** y utiliza **JWT** para autenticación.
---

## Autenticación
| Método | Endpoint          | Descripción                        | Body (JSON) |
|--------|------------------|------------------------------------|-------------|
| POST   | `/auth/register` | Registrar un nuevo usuario         | `{ "nombre": "Mailyn", "email": "mailyn@ejemplo.com", "password": "123456" }` |
| POST   | `/auth/login`    | Iniciar sesión y obtener token JWT | `{ "email": "mailyn@ejemplo.com", "password": "123456" }` |

**Respuesta exitosa (login):**
```json
{
  "token": "jwt_generado",
  "usuario": {
    "id": 1,
    "nombre": "Mailyn",
    "email": "mailyn@ejemplo.com"
  }
}

---

Endpoints de Tareas
Todos los endpoints requieren token JWT en el header: Authorization: Bearer <token>
Método / Endpoint	/ Descripción	/ Body (JSON)
GET	/tasks	Listar todas las tareas del usuario	—
POST	/tasks	Crear nueva tarea	{ "titulo": "Revisar CV", "descripcion": "Actualizar LinkedIn", "estado": "pendiente", "prioridad": "alta" }
GET	/tasks/:id	Obtener tarea por ID	—
PUT	/tasks/:id	Actualizar tarea existente	{ "estado": "en progreso", "prioridad": "media" }
DELETE	/tasks/:id	Eliminar tarea	—

Ejemplo de respuesta (GET /tasks):

json
[
  {
    "id": 1,
    "titulo": "Revisar CV",
    "descripcion": "Actualizar LinkedIn",
    "estado": "pendiente",
    "prioridad": "alta",
    "usuario_id": 1
  },
  {
    "id": 2,
    "titulo": "Preparar entrevista",
    "descripcion": "Pago Directo",
    "estado": "en progreso",
    "prioridad": "media",
    "usuario_id": 1
  }
]

Notas técnicas
Autenticación: JWT en headers (Authorization).
Estados válidos: pendiente, en progreso, completada.
Prioridades válidas: baja, media, alta.

Respuestas de error:
401 Unauthorized → Token inválido o ausente.
404 Not Found → Tarea no encontrada.
400 Bad Request → Datos inválidos.
