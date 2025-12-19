# Proyecto 3: Dashboard de Ventas

Aplicación Full Stack para la visualización y análisis de métricas de ventas.  
Incluye un **backend en Node.js + Express + PostgreSQL/MongoDB** y un **frontend en React con librerías de visualización (Chart.js/Recharts)**.  
El objetivo es ofrecer un **panel ejecutivo interactivo** que permita tomar decisiones estratégicas basadas en datos.

---

## Características principales

- **Backend (API REST)**:
  - Endpoints para métricas de ventas por región, producto y período.
  - Consultas agregadas a la base de datos para KPIs.
  - Configuración con `dotenv` y seguridad con `cors`.

- **Frontend (React)**:
  - Dashboard con gráficas dinámicas (líneas, barras, pastel).
  - Filtros por rango de fechas y categorías.
  - Panel de KPIs: ventas totales, clientes activos, productos más vendidos.
  - Interfaz moderna y responsiva.

---
## Tecnologías utilizadas

- **Backend**: Node.js, Express, PostgreSQL/MongoDB, dotenv, cors
- **Frontend**: React, Axios, Chart.js / Recharts
- **Dev Tools**: Nodemon, ESLint/Prettier

---

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/usuario/dashboard-ventas.git
cd dashboard-ventas

### 2. Configurar el backend
bash
cd backend
npm install
npm run dev   # o npm start

#### Crear archivo .env:
PORT=4000
DB_URL=postgres://usuario:password@localhost:5432/dashboard_db
El backend estará disponible en http://localhost:4000.

### 3. Configurar el frontend
bash
cd ../frontend
npm install
npm start
El frontend estará disponible en http://localhost:3000.

## Uso
Accede al frontend en el navegador (http://localhost:3000).
Selecciona filtros de fecha, región o producto.
Visualiza métricas en gráficas dinámicas.
Consulta KPIs en el panel ejecutivo.
Utiliza la información para análisis y toma de decisiones.

## Endpoints principales
Método	Endpoint	Descripción
GET	/sales/summary	KPIs generales de ventas
GET	/sales/byRegion	Ventas agrupadas por región
GET	/sales/byProduct	Ventas agrupadas por producto
GET	/sales/byPeriod	Ventas filtradas por rango de fechas

## Próximas mejoras
Exportación de reportes en PDF/Excel.
Integración con APIs externas (ejemplo: CRM).
Autenticación de usuarios con JWT.
Visualización en tiempo real con WebSockets.

## Licencia
Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y compartirlo libremente, siempre dando crédito al autor.