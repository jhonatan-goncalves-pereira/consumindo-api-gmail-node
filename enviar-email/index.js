const nodemailer = require("nodemailer");
const CLIENT_ID = "##yourclientid##";
const CLIENT_SECRET = "##yourclientsecret##";

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
      to: "admjhonatancr7@gmail.com",
      subject: "É um teste de envio de email",
      text: "Hello, World!",
      html: "<h1>Hello World</h1>"
    }

    const result = await transport.sendMail(mailOptions)

    return result

  } catch (error) {
    console.log(error);
  }
}

sendEmail()
  .then((result) => {
    console.log("Email foi enviado")
  })
  .catch((error) => {
    console.log(`An ${error} occured`)
  })