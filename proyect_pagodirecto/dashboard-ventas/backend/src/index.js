require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { router: authRouter, authenticate } = require('./auth');
const { router: salesRouter } = require('./sales');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/sales', authenticate, salesRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API escuchando en http://localhost:${port}`));