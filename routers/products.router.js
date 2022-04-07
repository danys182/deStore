const express = require('express');
const router = express.Router();

//Lista de productos estáticos para prueba
const products = [
	{
		id: 1,
		name: 'Sleek Soft Ball',
		price: 100,
	},
	{
		id: 2,
		name: 'Intelligent Plastic Towels',
		price: 70,
	},
	{
		id: 3,
		name: 'Intelligent Wooden Salad',
		price: 50,
	},
];

router.get('/', (req, res) => {
	res.json(products);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const products = [];
	res.json(products.find((item) => item.id == id));
});

router.post('/', (req, res) => {
	const body = req.body;
	res.json({
		message: 'Creado',
		body: body,
	});
});

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	res.json({
		id: id,
		message: 'Actualizado',
		data: body,
	});
});

module.exports = router;
