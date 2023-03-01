const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  cloudinary_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  
});


module.exports = mongoose.model('Card', cardSchema);
