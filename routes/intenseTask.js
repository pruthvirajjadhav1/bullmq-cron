import express from 'express';
import intenseTask from '../controllers/intenseTask.js';
import asyncWrapper from '../middleware/asyncWrapper.js';


const router = express.Router();

router.post('/intenseTask', asyncWrapper(intenseTask));


export default router;

