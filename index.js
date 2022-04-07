const express = require('express');
const routerApi = require('./routers/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Inicio deStore');
});

routerApi(app);

app.listen(port, () => {
	console.log('Corriendo');
});
