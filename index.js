const express = require('express');
const axios = require('axios'); 
const bodyParser = require('body-parser');
const { Queue, Worker, Job } = require('bullmq');

const app = express();
app.use(bodyParser.json());

const redisUrl = 'redis://localhost:6379';

const myQueue = new Queue('myQueue', { connection: redisUrl, limiter: { max: 1, duration: 1000 } });

const worker = new Worker('myQueue', async (job) => {
  console.log('Job executed at: ' + new Date().toISOString());
  const apiResponse = await axios.get('https://catfact.ninja/fact');
  job.data = apiResponse.data.fact;
  console.log('Cat Fact from API:', job.data); 
});

let jobID = 0;

app.post('/create-job', async (req, res) => {
  try {
    const apiResponse = await axios.get('https://catfact.ninja/fact');

    const catFact = apiResponse.data.fact;

    const job = await myQueue.add('logCatFact', catFact, { repeat: { every: 1000 }} );
    jobID = job.id;
    res.status(200).json({ message: 'Cat Fact Job created successfully', ID: job.id });

  } catch (error) {
    console.error('Error fetching cat fact from the API:', error);
    res.status(500).json({ error: 'Failed to fetch cat fact from the API' });
  }
});

app.post('/remove-job', async (req, res) => {
    const jobId = req.body.jobId; 
  
    try {
      const job = await Job.fromId(myQueue, jobId);
      if (job) {
        await job.remove();
        res.status(200).json({ message: `Job with ID ${jobId} removed successfully` });
      } else {
        res.status(404).json({ error: 'Job not found' });
      }
    } catch (error) {
      console.error('Error removing job:', error);
      res.status(500).json({ error: 'Failed to remove the job' });
    }
  });
      

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
