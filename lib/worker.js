

import { Worker , Queue} from 'bullmq';

import processPdf from './utils.js';

const redisUrl = 'redis://localhost:6379';
const queue = new Queue("pdfJobQueue", {
	connection: redisUrl,
  });

  
let jobIterations = 0;

const workerHandler = async (job) => {
	console.log("Starting job:", job.name);
	console.log("Job ID:", job.id);
  
	jobIterations++;
  
	if (jobIterations >= 3) {
	  console.log("Stopping repetition of job:", job.name);
  
	  await queue.removeRepeatable({
		jobId: 'isthisuniqueenough',
		repeat: {
		  pattern: '*/5 * * * * *',
		  limit: 5,
		  key: 'uniqueKeyForThisRepeatableJob',
		},
	  });
	}
  
	await processPdf(job);
  
	console.log(`Finished job: ${jobIterations} `, job.name);
	return;
  };

  
const workerOptions = {
	connection: redisUrl
};

const worker = new Worker("pdfJobQueue", workerHandler, workerOptions);

console.log("Worker started!");
