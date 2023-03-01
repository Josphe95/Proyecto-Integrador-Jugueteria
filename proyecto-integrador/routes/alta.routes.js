const Card = require('../models/cards');
const express = require('express');
const router = express.Router();
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');
const upload = require('../utils/multer');


router.get('/alta', function (req, res, next) {
  if (req.path === '/alta') {
    res.render('alta', {
      title: 'Alta',
    });
  } else {
    ;
  }
});



router.post('/alta', upload.single('image'), async (req, res) => {

  // Carga la imagen en Cloudinary utilizando stream
  const result = await cloudinary.uploader.upload(req.file.path);

    // Crea una nueva tarjeta con la información y la URL de la imagen en Cloudinary
    const newCard = new Card({
      image: result.secure_url,
      cloudinary_id: result.public_id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
    });
  
    newCard.save()
      .then((result) => {
        console.log('Tarjeta creada con éxito:', result);
        res.json({ message: 'Tarjeta creada con éxito' });
      })
      .catch(error => {
        console.log('Error al crear la tarjeta:', error);
        res.status(500).json({ error: 'Error al crear la tarjeta en la base de datos' });
      });
  });






module.exports = router;