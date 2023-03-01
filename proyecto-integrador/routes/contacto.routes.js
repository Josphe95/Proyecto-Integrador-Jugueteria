const express = require('express');
const router = express.Router();

router.get('/contacto', function (req, res, next) {
    if (req.path === '/contacto') {
      res.render('contacto', {
        title: 'Contacto',
      });
    } else {
      next();
    }
});

module.exports = router;