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

export const taskDelete = async (req, res) => {
  const { id } = req.params;
  const task = await taskModel.findByIdAndDelete({ _id: id });
  console.log(task);
  if (task) {
    res.status(200).json({
      message: 'Tarea eliminada.',
      object: task,
    });
  } else {
    res.status(404).json({
      message: 'Tarea no encontrada.',
      object: task,
    });
  }
};
