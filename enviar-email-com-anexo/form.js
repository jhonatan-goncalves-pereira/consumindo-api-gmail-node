const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//define o Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// define a rota
app.get('/formGmail', function (req, res) {
    res.render("formulario")
});

//define a porta
app.listen(8000, function () {
    console.log("Servidor rodando na porta 8000");
});


