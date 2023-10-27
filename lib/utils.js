
import { createPdf } from './generatePdf.js';

const processPdf = async (job) => {

	console.log(job.name);
	// console.log(job.data);

	await createPdf(job.data.pdf.data);

};

export default processPdf;
