import express from 'express';
const router = express.Router();
import { getTask, setTask } from '../controllers/taskController.js';

export const routeTask = router.get('/task', getTask).post('/task', setTask);
