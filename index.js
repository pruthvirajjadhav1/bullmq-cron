const express = require('express');
const bodyParser = require('body-parser');
const { Queue, Worker } = require('bullmq');

const app = express();
app.use(bodyParser.json());

const redisUrl = 'redis://localhost:6379';

const myQueue = new Queue('myQueue', { connection: redisUrl, limiter: { max: 1, duration: 1000 } });

const worker = new Worker('myQueue', async (job) => {
  console.log('Job executed at: ' + new Date().toISOString());
});

app.post('/create-job', (req, res) => {
  const data = req.body;

  const job = myQueue.add('logJob', data, { repeat: { every: 1000 } });

  res.status(200).json({ message: 'Job created successfully' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
