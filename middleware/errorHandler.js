





export function onNoMatch(req, res) {

	console.error('Not Found');
	
	res.status(404).json({ msg: 'Route does not exist' });

}


export function onError(err, req, res, next) {

	console.error(err);

	return res.status(500).json({
		status: {
			message: 'There was an error',
			status_code: 500,
			success: false
		}
	});

}

