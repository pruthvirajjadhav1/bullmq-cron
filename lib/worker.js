

import { Worker , Queue} from 'bullmq';

import processPdf from './utils.js';
import axios from 'axios';

const redisUrl = 'redis://localhost:6379';
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
  
	if (jobIterations === 3) {
		console.log("Stopping repetition of job:", job.name);

		const repeatable = await queue.removeRepeatableByKey(job.repeatJobKey);

		console.log(repeatable);

	} else {

		await processPdf(job);

	}
  
	console.log(`Finished job: ${jobIterations} `, job.name);
	return;
  };

  
const workerOptions = {
	connection: redisUrl
};

const worker = new Worker("pdfJobQueue", workerHandler, workerOptions);

console.log("Worker started!");
