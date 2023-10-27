
import { Queue, Job } from 'bullmq';

const redisUrl = 'redis://localhost:6379';

const pdfJobQueue = new Queue("pdfJobQueue", {
	connection: redisUrl
});

const getAllTasks = async (req, res) => {

	console.log(req.body);

	const repeatableJobs = await pdfJobQueue.getRepeatableJobs();

	// const job = await Job.fromId(pdfJobQueue, jobId);

	// await repeatableJobs[0].remove();

	await pdfJobQueue.removeRepeatableByKey('processGeneratingPdf:isthisuniqueenough:::5000');

	res.status(201).json({ success: true, repeatableJobs });

}


export default getAllTasks;
