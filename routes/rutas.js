// routes/index.js
const express = require('express');
const router = express.Router();
const { fecha, hora, saludo } = require('../test/fecha-hora');

router.use(saludo); 
router.use(fecha);  
router.use(hora);   

router.get('/', (req, res) => {
    console.log(`La fecha actual es ${req.fechaActual} y la hora actual es ${req.horaActual}`);
    res.send('Consulta realizada, verifica la consola.');
});

module.exports = router;
