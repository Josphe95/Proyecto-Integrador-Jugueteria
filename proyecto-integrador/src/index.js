require('dotenv').config()
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const routes = require("../routes/index");
const path = require('path');
const database = require('../utils/database');
const methodOverride = require('method-override');


app.use(methodOverride('_method'));

database();

app.use(cors());
app.use(routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, '../public')));


app.listen(3000,() => {
    console.log('Servidor escuchando en el puerto 3000')
});