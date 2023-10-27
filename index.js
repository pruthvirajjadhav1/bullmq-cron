const express = require('express');
const Bull = require('bull');
const Arena = require('bull-arena');
const axios = require('axios');

const app = express();
const port = 3000;
app.use(express.json());
// Create a Bull queue
const catFactQueue = new Bull('catFactQueue');

// Worker 
catFactQueue.process(async job => {
  const response = await axios.get('https://catfact.ninja/fact');
  const catFact = response.data.fact;

  console.log('Cat Fact:', catFact);
});

app.get('/create-job', async (req, res) => {

  const job = await catFactQueue.add({}, { repeat: { cron: '*/1 * * * * *' } });
  const jobId = job.id;
  res.json({message:"data added", id: jobId});
});

app.post('/remove-job', async (req, res) => {
  const jobId = req.body.jobId; 

  try {
    const job = await catFactQueue.getJob(jobId);

    if (job) {
      await job.remove();
      res.send(`Job with ID ${jobId} removed from the queue.`);
    } else {
      res.send(`Job with ID ${jobId} not found in the queue.`);
    }
  } catch (error) {
    res.status(500).send(`Error removing job: ${error.message}`);
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
