import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import './src/database/config.js';
import { routeTask } from './src/routes/taskRoutes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routeTask);

app.set('port', process.env.PORT || 4024);
app.listen(app.get('port'), () => {
  console.log('Estoy en el puerto ' + app.get('port'));
});
