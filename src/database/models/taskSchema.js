import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
});

export const taskModel = mongoose.model('task', taskSchema);
