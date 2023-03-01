const multer = require('multer');

const upload = multer({
  dest: 'temp/', // Carpeta temporal
  fileFilter: function (req, file, cb) {
    // Valida el tipo de archivo permitido
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no permitido'), false);
    }
  },
  limits: { fileSize: 1024 * 1024 * 5 } // 5 MB
});

module.exports = upload;
