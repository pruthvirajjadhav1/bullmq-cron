import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
import htmlToPdfMake from "html-to-pdfmake";
// import axios from "axios";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import fs from "fs";
import jsdom from "jsdom";
const { JSDOM } = jsdom;
const { window } = new JSDOM("");

// async function imageUrlToBase64(url) {
// 	try {
// 	  const response = await axios.get(url, {
// 		responseType: "arraybuffer",
// 	  });
  
// 	  const contentType = response.headers["content-type"];
  
// 	  const base64String = `data:${contentType};base64,${Buffer.from(
// 		response.data
// 	  ).toString("base64")}`;
  
// 	  return base64String;
// 	} catch (err) {
// 	  console.log(err);
// 	}
//   }



export const createPdf = async (htmlData) => {

	console.log('initializing...');

	const html = htmlToPdfMake(htmlData, {
		window
	});

	console.log('html generated');

	const docDefinition = {
		content: [html],
		pageOrientation: "landscape",
		// styles: {
		// 	"html-h1": {
		// 	color: "#003366",
		// 	background: "white",
		// 	},
		// },
	};
  
	const pdfDocGenerator = pdfMake.createPdf(docDefinition);

	console.log('pdf generated');

	pdfDocGenerator.getBuffer(function (buffer) {
		fs.writeFileSync("label.pdf", buffer);
	});

	return true;

	// return res.status(201).json({
	// 	status: {
	// 		message: 'PDF Generated Successfully',
	// 		status_code: 200,
	// 		success: true
	// 	}
	// });

}