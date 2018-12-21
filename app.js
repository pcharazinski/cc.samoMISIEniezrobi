const express = require ("express");
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require ('method-override');
mongoose.connect ('mongodb://admin1:admin123@ds247310.mlab.com:47310/samosieniezrobi_pawel', { useNewUrlParser: true }).then (() => {
console.log('ejj... chyba polaczylam sie z baza danych, lol');

});
const app = express ();

app.use (bodyParser.urlencoded({extended:false}));
app.use (methodOverride('_method'));
app.set ("view engine", "pug");
const indexRoutes = require ('./routes/index');
app.use ('/', indexRoutes);
const port = process.env.PORT || 8080 || 3000;
app.listen (port, () =>console.log(`Jestem podlaczona do serwera ${port} bijacz`));
