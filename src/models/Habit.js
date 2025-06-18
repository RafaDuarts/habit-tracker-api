import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  logs: [{ date: { type: Date, default: Date.now } }]
});

export const Habit = mongoose.model('Habit', habitSchema);
