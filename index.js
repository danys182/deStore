const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Inicio deStore');
});

app.get('/products', (req, res) => {
	res.json({
		products: [{ name: 'Products 1' }, { name: 'Products 2' }],
	});
});

app.listen(port, () => {
	console.log('Corriendo');
});
