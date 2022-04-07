const express = require('express');
const router = express.Router();

const ProductsServices = require('./../services/products.services');
const service = new ProductsServices();

router.get('/', (req, res) => {
	const products = service.getAll();
	res.json(products);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const products = service.getById(id);
	res.json(products);
});

router.post('/', (req, res) => {
	const body = req.body;
	const newProduct = service.create(body);
	res.json(newProduct);
});

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	const newProduct = service.update(id, body);
	res.json(newProduct);
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.json(service.delete(id));
});

module.exports = router;
