import express from 'express';
import { Habit } from '../models/Habit.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.use(authMiddleware);

// Criar hábito → vincula ao usuário autenticado
router.post('/', async (req, res) => {
  try {
    const habit = await Habit.create({
      ...req.body,
      userId: req.userId // pega do token
    });
    res.status(201).json(habit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Listar hábitos → apenas do usuário autenticado
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.userId });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar hábito → verifica se pertence ao usuário
router.patch('/:id', async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!habit) return res.status(404).json({ error: 'Hábito não encontrado' });
    res.json(habit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar hábito → verifica se pertence ao usuário
router.delete('/:id', async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });
    if (!habit) return res.status(404).json({ error: 'Hábito não encontrado' });
    res.json({ message: 'Hábito excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Registrar conclusão de um hábito
router.post('/:id/log', async (req, res) => {
  try {
    const habit = await Habit.findOne({ _id: req.params.id, userId: req.userId });
    if (!habit) return res.status(404).json({ error: 'Hábito não encontrado' });

    habit.logs.push({ date: new Date() });
    await habit.save();

    res.json({ message: 'Hábito registrado como concluído', habit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;
