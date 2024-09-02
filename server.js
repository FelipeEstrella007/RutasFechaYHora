
const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/rutas');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
