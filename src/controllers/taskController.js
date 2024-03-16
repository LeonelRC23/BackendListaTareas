import { taskModel } from '../database/models/taskSchema.js';

export const getTask = async (req, res) => {
  const task = await taskModel.find();
  res.status(200).json(task);
};

export const setTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      message: 'Error interno',
      error: error,
    });
  }
};

export const taskDelete = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({
      message: 'Error interno',
      error: error,
    });
  }
};
