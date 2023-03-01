const express = require('express');
const router = express.Router();
const inicioController = require('../controllers/inicio.controller');

router.get('/', inicioController.mostrarInicio);

router.get('/inicio', inicioController.mostrarInicio);

router.put('/:id', inicioController.actualizarTarjeta);

router.delete('/:id', inicioController.eliminarTarjeta);

module.exports = router;
