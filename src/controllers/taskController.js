import { taskModel } from '../database/models/taskSchema.js';

export const getTask = async (req, res) => {
  const task = await taskModel.find();
  res.status(200).json(task);
};

export const setTask = async (req, res) => {
  const { name } = req.body;
  const taskCreate = new taskModel({
    name: name,
  });
  taskCreate.save();
  res.status(200).json({
    message: 'Objeto cargado',
    object: {
      name: name,
    },
  });
};
