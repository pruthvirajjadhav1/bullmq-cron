
import { Queue } from 'bullmq';

const redisUrl = 'redis://localhost:6379';

const pdfJobQueue = new Queue("pdfJobQueue", {
	connection: redisUrl
});

const deleteTask = async (req, res) => {

	console.log(req.body);

	const { name, id, time } = req.body;

	// {
	// 	"name": "processGeneratingPdf",
	// 	"id": "isthisuniqueenough",
	// 	"time": 5000
	// }

	const repeatable = await pdfJobQueue.removeRepeatableByKey(`${name}:${id}:::${time}`);

	console.log(repeatable);

	res.status(201).json({ success: true });

}


export default deleteTask;
