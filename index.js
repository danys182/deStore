const express = require('express');
const routerApi = require('./routers/index');
const {
	logErrors,
	errorHandler,
	boomErrorHandler,
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
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log('Corriendo');
});
