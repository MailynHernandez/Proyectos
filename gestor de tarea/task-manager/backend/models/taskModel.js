export const taskModel = {
  async list(db, userId, { status, priority }) {
    let q = "SELECT * FROM tasks WHERE user_id = ?";
    const params = [userId];
    if (status) { q += " AND status = ?"; params.push(status); }
    if (priority) { q += " AND priority = ?"; params.push(priority); }
    q += " ORDER BY created_at DESC";
    return db.all(q, ...params);
  },
  async create(db, userId, payload) {
    const { title, description = "", status = "pendiente", priority = "media" } = payload;
    const res = await db.run(
      `INSERT INTO tasks (title, description, status, priority, user_id)
       VALUES (?, ?, ?, ?, ?)`,
      title, description, status, priority, userId
    );
    return db.get("SELECT * FROM tasks WHERE id = ?", res.lastID);
  },
  async update(db, userId, id, payload) {
    const existing = await db.get("SELECT * FROM tasks WHERE id = ? AND user_id = ?", id, userId);
    if (!existing) return null;
    const next = {
      title: payload.title ?? existing.title,
      description: payload.description ?? existing.description,
      status: payload.status ?? existing.status,
      priority: payload.priority ?? existing.priority
    };
    await db.run(
      `UPDATE tasks SET title=?, description=?, status=?, priority=?, updated_at=CURRENT_TIMESTAMP
       WHERE id=? AND user_id=?`,
      next.title, next.description, next.status, next.priority, id, userId
    );
    return db.get("SELECT * FROM tasks WHERE id = ?", id);
  },
  async remove(db, userId, id) {
    const res = await db.run("DELETE FROM tasks WHERE id=? AND user_id=?", id, userId);
    return res.changes > 0;
  }
};