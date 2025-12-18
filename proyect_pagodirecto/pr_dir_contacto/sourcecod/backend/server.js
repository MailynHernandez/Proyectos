import express from "express";
import { Pool } from "pg";

const app = express();
app.use(express.json());

const pool = new Pool({ user:"postgres", host:"localhost", database:"contacts_db", password:"password", port:5432 });

app.get("/contacts", async (req,res)=>{
  const { q } = req.query;
  const query = q 
    ? "SELECT * FROM contacts WHERE name ILIKE $1 OR email ILIKE $1 OR phone ILIKE $1 OR company ILIKE $1"
    : "SELECT * FROM contacts";
  const values = q ? [`%${q}%`] : [];
  const result = await pool.query(query, values);
  res.json(result.rows);
});

app.get("/contacts/:id", async (req,res)=>{
  const result = await pool.query("SELECT * FROM contacts WHERE id=$1",[req.params.id]);
  res.json(result.rows[0]);
});

app.post("/contacts", async (req,res)=>{
  const { name,email,phone,company } = req.body;
  const result = await pool.query(
    "INSERT INTO contacts (name,email,phone,company) VALUES ($1,$2,$3,$4) RETURNING *",
    [name,email,phone,company]
  );
  res.status(201).json(result.rows[0]);
});

app.put("/contacts/:id", async (req,res)=>{
  const { name,email,phone,company } = req.body;
  const result = await pool.query(
    "UPDATE contacts SET name=$1,email=$2,phone=$3,company=$4 WHERE id=$5 RETURNING *",
    [name,email,phone,company,req.params.id]
  );
  res.json(result.rows[0]);
});

app.delete("/contacts/:id", async (req,res)=>{
  await pool.query("DELETE FROM contacts WHERE id=$1",[req.params.id]);
  res.status(204).send();
});

app.listen(3001,()=>console.log("API running on port 3001"));