const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const DB_URI = process.env.DB_URI;

const database = () => {mongoose.connect(DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then (() => {
    console.log('Conexión a la base de datos exitosa');
})
.catch((error) => {
    console.error('Error en la conexión a la base de datos:', error);
});
}

module.exports = database;