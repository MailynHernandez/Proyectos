import { Router } from "express";
import { getDB } from "../db.js";
import { requireAuth } from "../middleware/auth.js";
import { taskModel } from "../models/taskModel.js";

const router = Router();

router.use(requireAuth);

router.get("/", async (req, res) => {
  const db = await getDB();
  const { status, priority } = req.query;
  const tasks = await taskModel.list(db, req.user.id, { status, priority });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const db = await getDB();
  const task = await taskModel.create(db, req.user.id, req.body);
  res.status(201).json(task);
});

router.put("/:id", async (req, res) => {
  const db = await getDB();
  const updated = await taskModel.update(db, req.user.id, req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: "No encontrada" });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  const db = await getDB();
  const ok = await taskModel.remove(db, req.user.id, req.params.id);
  res.json({ success: ok });
});

export default router;