const Card = require('../models/cards');
const cloudinary = require('../utils/cloudinary');

exports.mostrarInicio = async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.render('inicio', { cards });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.actualizarTarjeta = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("Antes de la Card.findByIdAndUpdate");
    const card = await Card.findByIdAndUpdate(id);
    console.log('Tarjeta eliminada con éxito')
    res.redirect('/');
  } catch (error) {
    console.log('Error al actualizar la tarjeta:', error);
    res.status(500).json( error, 'Error al actualizar la tarjeta en la base de datos' );
  }
};

exports.eliminarTarjeta = async (req, res) => {
  const { id } = req.params;
  try {
    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ error: 'Tarjeta no encontrada' });
    }
    // Elimina la imagen de Cloudinary
    await cloudinary.uploader.destroy(card.cloudinary_id);
    await card.remove();
    console.log('Tarjeta eliminada con éxito')
    res.redirect('/'); 
  } catch (error) {
    console.log('Error al eliminar la tarjeta:', error);
    res.status(500).json({ error: 'Error al eliminar la tarjeta en la base de datos' });
  }
};
