const express = require('express');
const router = express.Router();

const ProductsServices = require('./../services/products.services');
const service = new ProductsServices();

router.get('/', async (req, res) => {
	try {
		const products = await service.getAll();
		res.json(products);
	} catch (error) {
		res.status(404).json({
			message: error,
		});
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const product = await service.getById(id);
		res.json(product);
	} catch (error) {
		res.status(404).json({
			message: error,
		});
	}
});

router.post('/', async (req, res) => {
	const body = req.body;

	try {
		const newProduct = await service.create(body);
		res.json(newProduct);
	} catch (error) {
		res.status(404).json({
			message: error,
		});
	}
});

router.patch('/:id', async (req, res) => {
	const { id } = req.params;
	const body = req.body;

	try {
		const newProduct = await service.update(id, body);
		res.json(newProduct);
	} catch (error) {
		res.status(404).json({
			message: error,
		});
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		const product = await service.delete(id);
		res.json(product);
	} catch (error) {
		res.status(404).json({
			message: error,
		});
	}
});

module.exports = router;
