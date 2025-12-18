import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:3001/contacts?q=${query}`)
      .then((res) => res.json())
      .then(setContacts)
      .catch((err) => console.error("Error al obtener contactos:", err));
  }, [query]);


  const handleSave = (data) => {
    const method = data.id ? "PUT" : "POST";
    const url = data.id
      ? `http://localhost:3001/contacts/${data.id}`
      : "http://localhost:3001/contacts";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setEditingContact(null);
        setQuery(""); // refresca lista
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Eliminar este contacto?")) {
      fetch(`http://localhost:3001/contacts/${id}`, { method: "DELETE" })
        .then(() => setQuery(""));
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Directorio de Contactos</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "300px" }}
      />
      <button onClick={() => setEditingContact({})}>Nuevo Contacto</button>

      {editingContact && (
        <ContactForm
          contact={editingContact}
          onSave={handleSave}
          onCancel={() => setEditingContact(null)}
        />
      )}

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Empresa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.company || "-"}</td>
              <td>
                <button onClick={() => setEditingContact(c)}>Editar</button>{" "}
                <button onClick={() => handleDelete(c.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}