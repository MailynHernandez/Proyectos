import { useEffect, useState } from "react";
import api from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskBoard from "./components/TaskBoard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState("list"); // list | board
  const [filters, setFilters] = useState({ status: "", priority: "" });
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const { data } = await api.get("/tasks", { params: filters });
    setTasks(data);
  };

  useEffect(() => { load(); }, [filters]);

  const save = async (t) => {
    if (editing?.id) {
      await api.put(`/tasks/${editing.id}`, t);
    } else {
      await api.post("/tasks", t);
    }
    setEditing(null);
    await load();
  };

  const remove = async (id) => {
    if (window.confirm("¿Eliminar tarea?")) {
      await api.delete(`/tasks/${id}`);
      await load();
    }
  };

  return (
    <div className="container">
      <h2>Gestor de Tareas</h2>

      <div className="row">
        <select value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
          <option value="">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="en_progreso">En progreso</option>
          <option value="completada">Completada</option>
        </select>
        <select value={filters.priority} onChange={e => setFilters(f => ({ ...f, priority: e.target.value }))}>
          <option value="">Todas las prioridades</option>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
        <button onClick={() => setView(v => v === "list" ? "board" : "list")}>
          {view === "list" ? "Ver Kanban" : "Ver Lista"}
        </button>
        <button onClick={() => setEditing({})}>Nueva tarea</button>
      </div>

      {editing && <TaskForm initial={editing} onSave={save} onCancel={() => setEditing(null)} />}

      {view === "list"
        ? <TaskList tasks={tasks} onEdit={setEditing} onDelete={remove} />
        : <TaskBoard tasks={tasks} onEdit={setEditing} />
      }
    </div>
  );
}