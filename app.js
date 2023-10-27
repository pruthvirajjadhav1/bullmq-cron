
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { onNoMatch, onError } from './middleware/errorHandler.js';

import intenseRouter from './routes/intenseTask.js';
import allTasksRouter from './routes/getAllTasks.js';
import deleteTaskRouter from './routes/deleteTask.js';

import './lib/worker.js';

const app = express();

const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors());


app.use('/', intenseRouter);
app.use('/', allTasksRouter);
app.use('/', deleteTaskRouter);

app.use(onNoMatch);
app.use(onError);


const start = async () => {

	try {

		app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
		
	} catch (error) {

		// console.log(error);
		logger.error({ 'error': error });

	}

};

start();

