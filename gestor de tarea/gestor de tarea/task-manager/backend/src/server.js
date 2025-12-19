import "dotenv/config";
import express from "express";
import cors from "cors";
import authRoutes from "../routes/authRoutes.js";
import taskRoutes from "../routes/taskRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.json({ ok: true }));
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API escuchando en http://localhost:${port}`));