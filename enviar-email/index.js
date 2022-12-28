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
        accessToken: "ya29.a0AX9GBdU-eZY2St91PHUulrdB-pKj7AqjVwc3IAil6eyIQ1E_bITuf3iPUP1EFDWw4nz5tQUY1_4FA9trcWteUmdujJLy3-l3_l6x5IG61fBqW9cvgxwFmSPmySWz39J-8Z5GC6BNftbS2EKQy7duV9U_GXIdaCgYKAYQSARESFQHUCsbCB-PTssS51OTvUC0e1BXCgQ0163",
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