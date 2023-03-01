const express = require('express');
const router = express.Router();

router.get('/nosotros', function (req, res, next) {
    if (req.path === '/nosotros') {
      res.render('nosotros', {
        title: 'Nosotros',
      });
    } else {
      next();
    }
});

module.exports = router;