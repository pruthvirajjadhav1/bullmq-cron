
import { Queue } from 'bullmq';

import { htmlData } from '../lib/htmlData.js';
// import { createPdf } from '../lib/generatePdf.js';

const redisUrl = 'redis://localhost:6379';

const pdfJobQueue = new Queue("pdfJobQueue", {
	connection: redisUrl
});

const addJob = async (job) => {

	const newJob = await pdfJobQueue.add(job.type, job, {
		repeat: {
			every: 5000,
			limit: 5
		},
		jobId: 'isthisuniqueenough'
	});

	console.log('Job ID', newJob.id);

	return newJob;

}

const intenseTask = async (req, res) => {

	console.log(req.body);

	// await createPdf(htmlData);

	const job = await addJob({
		type: "processGeneratingPdf",
		pdf: {
		  data: htmlData,
		  name: 'new pdf',
		},
	});

	res.status(201).json({ success: true, jobID: job.id });

}


export default intenseTask;