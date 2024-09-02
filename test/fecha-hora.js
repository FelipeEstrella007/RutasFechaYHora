
var fecha = (req, res, next) => {
    req.fechaActual = new Date().toLocaleDateString();
    next();
}

var hora = (req, res, next) => {
    req.horaActual = new Date().toLocaleTimeString();
    next();
}

var saludo = (req, res, next) => {
    console.log("Hola");
    next();
}

module.exports = {
    fecha,
    hora,
    saludo
}
