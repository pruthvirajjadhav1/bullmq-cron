import cluster from 'cluster';
import { Worker, Queue } from 'bullmq';
import processPdf from './utils.js';
import axios from 'axios';
import os from 'os';

const redisUrl = 'redis://localhost:6379';

if (cluster.isMaster) {
  // Create one worker per CPU core
  const numCPUs = os.cpus().length;

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Code to run in each worker process
  const queue = new Queue("pdfJobQueue", {
    connection: redisUrl,
  });

  let jobIterations = 0;

  const workerHandler = async (job) => {
    console.log("Starting job:", job.name);
    console.log("Job ID:", job.id);
    console.log("Repeat Job Key:", job.repeatJobKey);

    jobIterations++;

    const apiResponse = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(apiResponse.data.value);

    // if (jobIterations === 3) {
    //   console.log("Stopping repetition of job:", job.name);

    //   const repeatable = await queue.removeRepeatableByKey(job.repeatJobKey);

    //   console.log(repeatable);
    // } else {
    await processPdf(job);
    // }

    console.log(`Finished job (PID: ${process.pid}) - Iteration ${jobIterations}`);
    return;
  };

  const workerOptions = {
    connection: redisUrl,
  };

  const worker = new Worker("pdfJobQueue", workerHandler, workerOptions);

  console.log(`Worker started (PID: ${process.pid})`);
}
