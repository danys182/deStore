const express = require('express');
const productsRouter = require('./products.router');

function routerApi(app) {
	const router = express.Router();
	//Mi ruta para versión 1
	app.use('/api/v1', router);

	//ruta para módulo productos
	router.use('/products', productsRouter);
}

module.exports = routerApi;
