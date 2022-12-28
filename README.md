# consumindo API GMAL com NODE JS e enviando mensagens para outras pessoas 

para continuar você presirá verificar se possui instalados no seu ambiente:
>- **npm**: é uma ferramenta de linha de comando que ajuda a interagir com plataformas online, como navegadores e servidores. 
>- **yarn**: é um gerenciador de pacotes para aplicar comandos prontos ao código de uma aplicação.
>- **node**: é um runtime, que nada mais é do que um conjunto de códigos, API's, ou seja, são bibliotecas responsáveis pelo tempo de execução (é o que faz o seu programa rodar) que funciona como um interpretador de JavaScript fora do ambiente do navegador web.
>- **express**:  é a estrutura da web Node. js mais popular. O que ele fornece é um vasto conjunto de recursos para a construção de aplicativos da web (única, várias páginas e híbrida). Com o Express, você pode estruturar um aplicativo da web que pode lidar com várias solicitações HTTP em um determinado URL.

## Se já tiver essas ferramentas instaladas pule esta tópico
Para instalação do Node siga o Link 
>[Node](https://nodejs.org/en/download/)


Para instalação do Yarn execute 
> npm install --global yarn

Verifique a versão com
> yarn -v

Se ao tentar verificar a versão tiver erros como e essa for a saída:
>- AppData\Roaming\npm\yarn.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em https://go.microsoft.com/fwlink/?LinkID=135170.

 - Acesse aqui:[ Resolução - habilitar carregamento de scripts no sistema]( https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%c3%a7%c3%a3o-de-scripts-foi-desabilitada-neste-sistema)

Se após isso ao executar o erro persistir e mostrar isso:
>- AppData\Roaming\npm\yarn.ps1 não pode ser carregado. O arquivo C:\Users\jhona\AppData\Roaming\npm\yarn.ps1 não está assinado digitalmente. Não é possível executar este script no sistema atual. Para obter mais informações sobre como executar scripts e definir a política de execução,    consulte about_Execution_Policies at https://go.microsoft.com/fwlink/?LinkID=135170.

tente o descrito aqui: [Executar Script não assinado digitalmente](https://lilinguas.com/erro-powershell-o-ficheiro-n%C3%A3o-est%C3%A1-assinado-digitalmente/)

## ENTENDENDO COMO FUNCIONA 

cria o package.json
> comando yarn init -y
tenha o Express(usado para criar rotas), caso ainda não tenha instalado execute:
>   yarn add express
instale o nodemon com o comando no terminal
> yarn add nodemon -D
- nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js, reiniciando automaticamente o aplicativo do nó quando as alterações de arquivo no diretório são detectadas.
crie o index.js para importar o express e adicione o código
![01 - index js](https://user-images.githubusercontent.com/94761781/208316531-f3ccc413-36bf-4c16-9b03-ce6e4decd299.png)

- agora vá em package.json e adicione o código no arquivo 
>"scripts":{
    "start":"nodemon index.js"
}
![02 -json](https://user-images.githubusercontent.com/94761781/208316533-14c9b6cc-5ade-46e1-8f81-6f912f754a53.png)


Agora você pode usar o **yarn start** em vez de node index.js para testar e ter mais praticidade em alterações


crie uma rota para testar, adicione no index.js: 
adicione:
> server.get('/', (req, res)=>{
    return res.send({message:"Hello, World of Jhonatan Gonçalves Pereira!"})
});
![03 - index js](https://user-images.githubusercontent.com/94761781/208316534-0974f071-b79d-45ca-aa08-d59801dca09d.png)
salve e abra no navegador pela porta usada, aqui no caso a porta 8000, se deu erro troque a porta no arquivo index.js, pois o erro é por provalvelmente a porta já está sendo usada.

para a visualização no Edge será diferente



## 📧 API GMAIL DO GOOGLE e PROJETO DO GOOGLE CLOUD E CREDENCIAS
##### 💡é uma API RESTful que pode ser usada para acessar caixas de correio do Gmail e enviar e-mail. 
Para a maioria dos aplicativos da Web, a API do Gmail é a melhor escolha para acesso autorizado aos dados do Gmail de um usuário e é adequado para vários aplicações, tais como:
- Extração, indexação e backup de e-mails somente leitura
- Envio automatizado ou programático de mensagens
- Migração de conta de e-mail
- Organização de e-mail, incluindo filtragem e classificação de mensagens
- Padronização de assinaturas de email em uma organização[API do GMAIL](https://developers.google.com/gmail/api/ )

##### 🧾conceitos da API GMAIL
> - ✉️**Message**: Uma mensagem de email que contém o remetente, os destinatários, o assunto e o corpo. Depois de um foi criada, uma mensagem não pode ser alterada. Uma mensagem é representada por um recurso de mensagem.
> - ↪️**Thread**: Uma coleção de mensagens relacionadas que formam uma conversa. Em um cliente de e-mail app, um thread é formado quando um ou mais destinatários respondem a uma mensagem com a sua própria mensagem.
> - 🏷️**Label**: Um mecanismo para organizar mensagens e threads. Por exemplo o rótulo "impostos" pode ser criado e aplicado a todas as mensagens e threads que tem a ver com os impostos de um usuário. Existem dois tipos de rótulos:
> -- **System labels**: Rótulos criados internamente, como , ou . Estes rótulos não pode ser excluído ou modificado. No entanto, alguns rótulos do sistema, como podem ser aplicados ou removidos de mensagens e threads.INBOXTRASHSPAMINBOX
> -- **User labels**: Rótulos criados por um usuário. Esses rótulos podem ser excluídos ou modificados pelo usuário ou um aplicativo. Um rótulo de usuário é representado por um recurso de rótulo.
> - 📝**Draft**: Uma mensagem não enviada. Uma mensagem contida no rascunho pode ser substituída. O envio de um rascunho exclui automaticamente o rascunho e cria uma mensagem com o rótulo do sistema. Um rascunho é representado por um recurso de rascunho.SENT



##### ⚠️requisitos para consumir api GMAIL na prática

> - Um **projeto do Google Cloud** (é a base para criar, ativar e usar todos os serviços do Google Cloud, incluindo gerenciar APIs, ativar o faturamento, adicionar e remover colaboradores e gerenciar permissões.).
se não tiver o projeto, acesse ➡️ [ criar projeto do Google CLoud](https://cloud.google.com/appengine/docs/standard/python3/building-app/creating-gcp-project?hl=pt-br)
![05](https://user-images.githubusercontent.com/94761781/208336844-007472ff-c66e-4f8c-9a72-4cab7ce525ce.png)
Se na criação do seu projeto do Google Cloud não aparecer a organização, você deverá usar outra conta que tenha a devida vinculação, caso contrário seguirá com um acesso restringindo.
> - Uma **Conta do Google com o Gmail ativado**.
caso não possua a conta, acesse ➡️ [criar conta do Gmail](https://accounts.google.com/)



Partindo desses requisitos agora é necessário ativar a API do GMAIL no projeto do Google Cloud.
- como você já tem o seu projeto CLoud criado é só localizar a opção de APIs para ativar a api do GMAIL

![06](https://user-images.githubusercontent.com/94761781/208337466-4e0e5c9e-694d-4ce1-a089-667f8aafd102.png)


Caso não encontre no seu console do Google Cloud, ative a API do Gmail, acesse: [Ativar API GMAIL ](https://console.cloud.google.com/apis/)
esse link te levará para essa tela diretamente, basta você ativar.
![04 - console](https://user-images.githubusercontent.com/94761781/208336476-0029b9cc-346a-4c3c-bac3-ce1848bb3ca5.png)



agora verifique se está tudo certo com a ativação da api pelo seu painel ou por esse [link](https://console.cloud.google.com/apis/library/gmail.googleapis.com). Por esse link vai pedir seus dados para verificar a sua conta, use a mesma conta atrelada ao seu Projeto do Google CLoud. Nessa minha tá sendo usada a CompassUolGmailPBAWS, que é o nome do meu projeto.
![07](https://user-images.githubusercontent.com/94761781/208338053-52b98f8a-ca5d-465d-9fe2-27d60e4cc439.png)



##### ⚠️ para consumir essa API, é necessário também uma credencial do Google
 No console do Google Cloud, acesse:
- **Menu menu > APIs e Serviços > Credenciais**

> - Antes de Criar Credenciais 
vai aparecer a opção para você configurar a tela de consentimento do autor, aqui vai depender da necessidade. O interno possui uma aplicação mais restrita, porém mais prática de uso. Essa tela de consentimento é justamente pelo fato da API precisar de autorizações. Eu usei o externo pra ser mais completo.
![09](https://user-images.githubusercontent.com/94761781/208339385-c0830eec-484b-4c53-bc58-22fe5d4e53ca.png)
após isso configure  as informações do App
![10](https://user-images.githubusercontent.com/94761781/208340854-adb5013a-39bf-4bdd-9d57-89b96e335d92.png)
mais abaixo você irá setar um domínio, mas terá que ser no esquema http/https. Ex: http://teste.com   
Agora insira os emails dos usuários para testes
![11](https://user-images.githubusercontent.com/94761781/208341435-7ac9f84e-a331-4963-bcf8-a5117edf97aa.png)

> retorne à tela e clique em em Criar Credenciais > ID do cliente OAuth.
Saiba mais sobre o [OAuth](https://nodemailer.com/smtp/oauth2/)
![06](https://user-images.githubusercontent.com/94761781/208342138-e2bab7b8-ebc2-46e8-a1b4-c381faceb0b8.png)

>- Clique em Tipo de aplicativo > aplicativo Área de Trabalho.
![07](https://user-images.githubusercontent.com/94761781/208342417-e8b1528b-6782-4d7d-a9e6-bb70c339cf9b.png)
> - No campo Nome, digite um nome para a credencial. Esse nome só é mostrado no console do Google Cloud.

> - após clicar em Criar. A tela criada pelo cliente OAuth é exibida, mostrando sua nova ID do Cliente e o segredo do Cliente.
![08](https://user-images.githubusercontent.com/94761781/208342951-8341dc90-bf48-45b3-b6b9-f59198236e12.png)
> - Clique em OK. A credencial recém-criada aparece em IDs de cliente do OAuth 2.0.
> - Salve o arquivo JSON baixado como , e mova o para o diretório de trabalho.credentials.json


# Instalar a biblioteca de cliente e configurar um exemplo
- Instale as bibliotecas usando npm:
> npm install googleapis@105 @google-cloud/local-auth@2.1.0 --save
![09](https://user-images.githubusercontent.com/94761781/208344066-23673253-46e5-4ddb-9a64-423742ec9967.png)

- configurar um exemplo de aplicação, crie/altere o arquivo index.js para adicionar o código:
```const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
async function listLabels(auth) {
  const gmail = google.gmail({version: 'v1', auth});
  const res = await gmail.users.labels.list({
    userId: 'me',
  });
  const labels = res.data.labels;
  if (!labels || labels.length === 0) {
    console.log('No labels found.');
    return;
  }
  console.log('Labels:');
  labels.forEach((label) => {
    console.log(`- ${label.name}`);
  });
}

authorize().then(listLabels).catch(console.error); 
``` 

> - execute no diretório do seu terminal ```node .```
Ele abrirá o seu navegador padrão e solicitará a permissão da sua conta do Gmail atrelada a criação do Projeto Google CLoud
![Captura de tela 2022-12-19 005928](https://user-images.githubusercontent.com/94761781/208345184-29e92d56-bf41-4cb4-8fe2-ad44d0b45c33.png)
- Na primeira vez que você executar o exemplo, ele solicitará que você autorize o acesso:

>Se você ainda não estiver conectado à sua Conta do Google, você está solicitado a entrar. Se você estiver conectado a várias contas, selecione uma conta a ser usada para autorização. - Clique em Aceitar.
As informações de autorização são armazenadas no sistema de arquivos, portanto, da próxima vez que você execute o código de exemplo, você não será solicitado a obter autorização.

> Você criou com êxito seu primeiro aplicativo Nodejs que faz solicitações para a API do Gmail.
![Captura de tela 2022-12-19 010009](https://user-images.githubusercontent.com/94761781/208345424-915ce043-69aa-44c3-a9c8-5299d9ca9e08.png)

## enviar mensagens para outras pessoas usando a API 

crie a pasta "enviar-email-com-anexo" e abra no terminal para executar:
> npm init -y
Isso criará o arquivo package.json para o projeto.
 Agora precisamos instalar os pacotes abaixo, conforme mostrado abaixo

> npm i express

>npm i nodemailer

- Express será o servidor web para esta aplicação e nodemailer nos permitirá enviar mensagens usando a api do gmail.


- crie o arquivo index.js e atribua o seguinte código:
```
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
        accessToken: "##youraccesstoken##",
      },
    });

    const mailOptions = {
        from:"jhonatan.goncalves08@aluno.ifce.edu.br",
        to:"admjhonatancr7@gmail.com",
        subject:"Teste de envio de email",
        text:"Olá, corpo do email",
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
    console.log("Email foi enviado")
})
.catch((error) => {
    console.log(`An ${error} occured`)
})
```


###### agora é necessário substituir:
- clientid, clientsecret e accesstoken da conta do console do Projeto Google Cloud. 
pode criar o ID do cliente OAuth2, mas no meu caso já criamos na abordagem anterior, veja abaixo
![2](https://user-images.githubusercontent.com/94761781/208373781-821122e6-688d-4eb4-b79b-faa3209572a1.png)

Na sequência, para o accesstoken,  acesse aqui: [AcessToken]( https://developers.google.com/oauthplayground/) e, a partir disso,  é necessário selecionar a api e os escopos e, em seguida, dar a permissão e ainda trocar o código de autorização com o token de acesso, conforme mostrado abaixo.
- selecione a seguinte opção
![4](https://user-images.githubusercontent.com/94761781/208375175-fbdd29c3-9541-426f-92cf-7e5d68bbadd4.png)
- vai abrir a tela de confirmação pra escolha do e-mail
![5](https://user-images.githubusercontent.com/94761781/208375178-00960b78-f202-4a48-8f87-ec2f44ed8672.png)
- pede a autorização
![6](https://user-images.githubusercontent.com/94761781/208375181-0a807a60-7d1c-4f2c-b623-98ae0c9dd9d9.png)
- e adiciona
![7](https://user-images.githubusercontent.com/94761781/208375183-b7db246e-64fc-4d85-aa77-36e49d17d35a.png)
- tecle no botão azul  o código  de autorização do Exchange para tokens e mostrará uma atualização e um token de acesso necessários para acessar os recursos protegidos por OAuth.

![8](https://user-images.githubusercontent.com/94761781/208375956-7d09c4fe-12bd-40e4-92ab-d8ba7943227e.png)

agora seguir para a terceira etapa:
> Configurar a solicitação para a API
- Constrói solicitação HTTP especificando o URI, o Método HTTP, os cabeçalhos, o tipo de conteúdo e o corpo da solicitação.
Em seguida, só clicar no botão "Enviar a solicitação" para iniciar a solicitação HTTP.


![11](https://user-images.githubusercontent.com/94761781/208377900-28266ad4-d1c3-4227-874e-a062d1424150.png)
copie e cole rapidamente, pois é por tempo limitado
Depois de obter o accessToken. Basta colá-lo dentro do script do index.js. 
![10](https://user-images.githubusercontent.com/94761781/208377897-86a90503-8b95-4439-ab84-0c357d0c0523.png)
- logo abaixo do código podemos definir o email e demais configurações
![12](https://user-images.githubusercontent.com/94761781/208378823-2742e46c-0ffc-4dba-b187-680a1fd532bc.png)


> Agora, basta executar o aplicativo node.js pelo comando abaixo, verá que o e-mail será recebido
```node index.js```
![13](https://user-images.githubusercontent.com/94761781/208381497-dcdeacc5-c4b8-4a9e-8ba2-f26ac70cbcdf.png)

- verifque o e-mail


Envio do e-mail
![d](https://user-images.githubusercontent.com/94761781/208381509-c9d4b69f-c95e-4d6e-9c56-610c56a78f30.png)


## Envio de emails partindo de um Form HTML5
##### crie uma pasta para essa codificação e inicie o projeto em node com 
- ```npm init``` para iniciar o projeto; 
- ```npm install express``` para adicionar o Express;
- ```npm install express-handlebars``` para modularizar o desenvolvimento com HTML;
- ```npm install --save body-parser``` para pegar dados do formulário HTML
- ```npm install -save nodemailer``` para enviar o email
- ```npm install -save nodemon``` para mais praticidade nos testes. Só salvar o código sem precisar parar a execução, apenas atualize a página.

----------------------
Por seguinte, crie o arquivo form.js e digite o seguinte código;


```
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

```

- crie o main Handlebars e adicione dentro da pasta de view/layouts
```
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>

<body>
    {{{ body }}}

</body>

</html>
```

- crie o arquivo formulario.handlebars que vai conter os elementos HTML e o coloque na pasta views
```

<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <form method="POST" action="/enviaEmail">
            <hr>
            <h2>PB AWS - Jhonatan Gonçalves Pereira</h2>
            <hr>
            <h4>Envio de email usando API do GMAIL</h4>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input name="emailEnvio" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="email">
                <small id="emailHelp" class="form-text text-muted">Seus dados estão seguros.</small>
            </div>
            <div class="form-group">
                <label>Assunto</label>
                <input name="assunto" type="text" class="form-control" id="exampleInputPassword1" placeholder="Assunto">
            </div>
            <div class="form-group">
                <label>Mensagem</label>
                <input name="mensagem" type="text" class="form-control" id="mensagem" placeholder="Mensagem">
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</div> 
```

- Só executar ```nodemon form.js```

#### trantando forms e enviando e-mail

TEREMOS A SEGUINTE TELA USANDO HANDLEBARS
![21](https://user-images.githubusercontent.com/94761781/208448379-1d746e46-87d0-47c1-a2f3-4862baa87a99.png)
