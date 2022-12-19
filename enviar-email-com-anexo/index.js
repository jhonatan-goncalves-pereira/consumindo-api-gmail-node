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
        accessToken: "ya29.a0AX9GBdUwt0wVe_PNZKJE5pOFA3pImtdFpAbE2qaUUI-unT1OY_BvVtUA9_4u0K5bchPpnB6KMfAB5yLo10CxKS53rXWADF_Hfbnm9KsR-9meVUkvRi-Dqr3gyfXdzI_tmQK1lCvxGNeeud50WAuc3sDD8r-I5icaCgYKAdUSAQASFQHUCsbClNUu1303-8Jop9CKxnyugg0166",
      },
    });


    //configurações do e-mail
    const mailOptions = {
      from: "jhonatan.goncalves08@aluno.ifce.edu.br",
      to: "jhonatangoncalves2002@gmail.com",
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
    console.log("Email has been sent")
  })
  .catch((error) => {
    console.log(`An ${error} occured`)
  })