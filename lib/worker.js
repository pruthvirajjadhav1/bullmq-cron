

import { Worker } from 'bullmq';

import processPdf from './utils.js';

const redisUrl = 'redis://localhost:6379';

let jobIterations = 0;

const workerHandler = async (job) => {

	console.log("Starting job:", job.name);
	console.log("Job ID:", job.id);

	await processPdf(job);

	console.log("Finished job:", job.name);
	jobIterations++; 

  	if (jobIterations >= 3) {
    console.log("Worker will stop after the 3rd iteration.");
    worker.close();
  	}

	return;

};

const workerOptions = {
	connection: redisUrl
};

const worker = new Worker("pdfJobQueue", workerHandler, workerOptions);

console.log("Worker started!");
