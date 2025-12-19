import React from "react";

export default function TaskBoard({ tasks }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {["pendiente", "en_progreso", "completada"].map((status) => (
        <div key={status}>
          <h3>{status}</h3>
          <ul>
            {tasks
              .filter((t) => t.status === status)
              .map((t) => (
                <li key={t.id}>{t.title}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}