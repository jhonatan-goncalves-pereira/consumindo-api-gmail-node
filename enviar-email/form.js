const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//para envio do email
const nodemailer = require("nodemailer");
const CLIENT_ID = "##yourclientid##";
const CLIENT_SECRET = "##yourclientsecret##";

//define o template
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//configuração do Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// define a rota
app.get('/formGmail', function (req, res) {
    res.render("formulario")
});

// define a rota após o envio do form do Method GET
app.post('/enviaEmail', function(req, res){
    res.send( "Foi enviado o email com o Assunto: <b>" + req.body.assunto 
            + "</b></br> e a Mensagem: <b>"+ req.body.mensagem
            + "</b></br> para o Email de <b>" + req.body.emailEnvio +"</b> " +
            " </br><form action='/formGmail'> <button> Retornar</button></form>"
            );
            //envia o email
            async function sendEmail() {
                try {
                const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                type: "OAuth2",
                user: "jhonatan.goncalves08@aluno.ifce.edu.br",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                //token temporário
                accessToken: "ya29.a0AX9GBdUYjdmh2pKfaadWN19xTA30wsLU0bOxMwhutB26HyEF8Eyoi1ofR9RaWyEdCgeQFICVMveVE1_HkI6A9YijHxEYa4eemlDiJ4uGhK7A9g6BwTRH5RL_lxvySocP2jyihBUOOlqcIsJjgrm5yjTulsGfaCgYKAaoSARESFQHUCsbC-O8-DSBiQd1GpEXPA2MkWA0163",
                },
                });
                 //configurações do e-mail
                const mailOptions = {
                from: "jhonatan.goncalves08@aluno.ifce.edu.br",
                to:  req.body.emailEnvio,
                subject: req.body.assunto,
                text: req.body.mensagem,
                html: req.body.assunto
                }
                const result = await transport.sendMail(mailOptions)
                return result
            } catch (error) {
                console.log(error);
            }
            }
            sendEmail().then((result) => {
                alert("Email foi enviado")
            }).catch((error) => {
      console.log(`An ${error} occured`)
            })

});
// se o method fosse GET use app.get... 

//define a porta
app.listen(8000, function () {
    console.log("Servidor rodando na porta 8000");
});


console.log();


