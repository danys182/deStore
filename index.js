const express = require('express');
const routerApi = require('./routers/index');
const {
	logErrors,
	errorHandle,
	boomErrorHandle,
} = require('./middlewares/error.handles');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Inicio deStore');
});

routerApi(app);

//Middleswares manejo de errores
app.use(logErrors);
app.use(boomErrorHandle);
app.use(errorHandle);

app.listen(port, () => {
	console.log('Corriendo');
});
