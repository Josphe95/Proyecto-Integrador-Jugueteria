const express = require('express');
const router = express.Router();

const altaroutes = require('./alta.routes');
const contactoroutes = require('./contacto.routes');
const inicioroutes = require('./inicio.routes');
const nosotrosroutes = require('./nosotros.routes');
router.use(altaroutes);
router.use(contactoroutes);
router.use(inicioroutes);
router.use(nosotrosroutes);

module.exports = router;