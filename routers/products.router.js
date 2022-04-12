const express = require('express');
const router = express.Router();

const ProductsServices = require('./../services/products.services');
const service = new ProductsServices();

router.get('/', async (req, res, next) => {
	try {
		const products = await service.getAll();
		res.json(products);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const product = await service.getById(id);
		res.json(product);
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	const body = req.body;

	try {
		const newProduct = await service.create(body);
		res.json(newProduct);
	} catch (error) {
		next(error);
	}
});

router.patch('/:id', async (req, res, next) => {
	const { id } = req.params;
	const body = req.body;

	try {
		const newProduct = await service.update(id, body);
		res.json(newProduct);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
	const { id } = req.params;

	try {
		const product = await service.delete(id);
		res.json(product);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
