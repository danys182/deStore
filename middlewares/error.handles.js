function logErrors(err, req, res, next) {
	next(err);
}

function errorHandle(err, req, res, next) {
	res.status(500).json({
		statusCode: 500,
		message: err,
		stack: err.stack,
	});
}

function boomErrorHandle(err, req, res, next) {
	if (err.isBoom) {
		const { output } = err;
		res.status(output.statusCode).json(output.payload);
	}

	next(err);
}

module.exports = { logErrors, errorHandle, boomErrorHandle };
