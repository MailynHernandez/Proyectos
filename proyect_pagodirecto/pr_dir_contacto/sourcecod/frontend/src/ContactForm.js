import { useState, useEffect } from "react";

export default function ContactForm({ contact, onSave, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    if (contact) setForm(contact);
  }, [contact]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>{contact ? "Editar Contacto" : "Nuevo Contacto"}</h2>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} required />
      <input name="company" placeholder="Empresa" value={form.company} onChange={handleChange} />
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
}