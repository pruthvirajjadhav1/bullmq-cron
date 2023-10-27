

import express from 'express';
import getAllTasks from '../controllers/getAllTasks.js';
import asyncWrapper from '../middleware/asyncWrapper.js';


const router = express.Router();

router.post('/getAllTasks', asyncWrapper(getAllTasks));


export default router;

