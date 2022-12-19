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
        clientId:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        accessToken: "ya29.a0AX9GBdUZ9cbpU8DrEoCcsBeuAPavk8a7OwMaqWoxPx1nXJ1f9sb3XibyiK3twbpgFIUXRRzQpF_viEitw_O_K5ho0f2xW9-HO50F-9C1gHDrc2O6aeWE2R3CehdGgg8a0QHMsTT_bVJp-8eubfHqh-xes1wh-_waCgYKAbMSAQASFQHUCsbCKiGFEGShBKwY20yN0S13PA0166",
      },
    });


    //configurações do e-mail
    const mailOptions = {
        from:"jhonatan.goncalves08@aluno.ifce.edu.br",
        to:"jhonatangoncalves2002@gmail.com",
        subject:"É um teste de envio de email",
        text:"Hello, World!",
        html:"<h1>Hello World</h1>"
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