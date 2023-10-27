

import express from 'express';
import deleteTask from '../controllers/deleteTask.js';
import asyncWrapper from '../middleware/asyncWrapper.js';


const router = express.Router();

router.post('/deleteTask', asyncWrapper(deleteTask));


export default router;

