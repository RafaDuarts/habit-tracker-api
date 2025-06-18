import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import habitRoutes from './routes/habit.routes.js';
import authRoutes from './routes/auth.routes.js';

import { connectDatabase } from './database/connection.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDatabase();

app.get('/', (req, res) => {
  res.send('Habit Tracker API - MongoDB');
});

app.use('/auth', authRoutes);
app.use('/habits', habitRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
