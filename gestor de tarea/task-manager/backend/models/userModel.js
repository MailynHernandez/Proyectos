export const userModel = {
  async findByEmail(db, email) {
    return db.get("SELECT * FROM users WHERE email = ?", email);
  },
  async create(db, { email, password_hash }) {
    const res = await db.run(
      "INSERT INTO users (email, password_hash) VALUES (?, ?)",
      email, password_hash
    );
    return { id: res.lastID, email };
  }
};