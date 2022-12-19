# ✉️📩consumindo API📧GMAL com NODE JS

🎬 para continuar você presirá verificar se possui instalados no seu ambiente:
>- **npm**: é uma ferramenta de linha de comando que ajuda a interagir com plataformas online, como navegadores e servidores. 
>- **yarn**: é um gerenciador de pacotes para aplicar comandos prontos ao código de uma aplicação.
>- **node**: é um runtime, que nada mais é do que um conjunto de códigos, API's, ou seja, são bibliotecas responsáveis pelo tempo de execução (é o que faz o seu programa rodar) que funciona como um interpretador de JavaScript fora do ambiente do navegador web.
>- **express**:  é a estrutura da web Node. js mais popular. O que ele fornece é um vasto conjunto de recursos para a construção de aplicativos da web (única, várias páginas e híbrida). Com o Express, você pode estruturar um aplicativo da web que pode lidar com várias solicitações HTTP em um determinado URL.

## ⚠️⚠️ Se já tiver essas ferramentas acima instaladas pule este tópico
Para instalação do Node siga o Link 
>[Node](https://nodejs.org/en/download/)


Para instalação do Yarn execute 
> npm install --global yarn

Verifique a versão com
> yarn -v

Se ao tentar verificar a versão tiver erros como e essa for a saída:
>- AppData\Roaming\npm\yarn.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em https://go.microsoft.com/fwlink/?LinkID=135170.

 - 💡Acesse aqui:[ Resolução - habilitar carregamento de scripts no sistema]( https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%c3%a7%c3%a3o-de-scripts-foi-desabilitada-neste-sistema)

Se após isso ao executar o erro persistir e mostrar isso:
>- AppData\Roaming\npm\yarn.ps1 não pode ser carregado. O arquivo C:\Users\jhona\AppData\Roaming\npm\yarn.ps1 não está assinado digitalmente. Não é possível executar este script no sistema atual. Para obter mais informações sobre como executar scripts e definir a política de execução,    consulte about_Execution_Policies at https://go.microsoft.com/fwlink/?LinkID=135170.

- 💁‍♂️tente o descrito aqui: [Executar Script não assinado digitalmente](https://lilinguas.com/erro-powershell-o-ficheiro-n%C3%A3o-est%C3%A1-assinado-digitalmente/)



## ⚙️PREPARANDO AMBIENTE

cria o package.json
> comando yarn init -y
a flag -y salta uma série de perguntas

tenha o Express(usado para criar rotas - URL que acessaremos), caso ainda não tenha instalado execute:
>  yarn add express

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
se não tiver o projeto, acesse ➡️ [ criar projeto do Google CLoud](https://developers.google.com/workspace/guides/create-projecthttps://developers.google.com/workspace/guides/create-project)
![05](https://user-images.githubusercontent.com/94761781/208336844-007472ff-c66e-4f8c-9a72-4cab7ce525ce.png)
Se na criação do seu projeto do Google Cloud não aparecer a organização, você deverá usar outra conta que tenha a devida vinculação, caso contrário seguirá com um acesso restringindo.
> - Uma **Conta do Google com o Gmail ativado**.
caso não possua a conta, acesse ➡️ [criar conta do Gmail](https://accounts.google.com/)



Partindo desses requisitos agora é necessário ativar a API do GMAIL no projeto do Google Cloud.
- como você já tem o seu projeto CLoud criado é só localizar a opção de APIs para ativar a api do GMAIL

![06](https://user-images.githubusercontent.com/94761781/208337466-4e0e5c9e-694d-4ce1-a089-667f8aafd102.png)


Caso não encontre no seu console do Google Cloud, ative a API do Gmail, acesse: [Ativar API GMAIL ](https://console.cloud.google.com/flows/enableapihttps://console.cloud.google.com/flows/enableapi)
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


## criar e enviar e-mails






## Execução
- Escolher uma API pública (https://any-api.com/, ou qualquer outra, e **deve ser diferente dos demais colegas**);
- Consumir essa API através do nodejs (recomendado uso de docker, se possível);
- Criar uma página html para fazer consultas pela API (pode ser bem simples, o layout não será avaliado).

## Entrega
- Aceitar o convite do repositório da sprint-2-pb-aws-ifce;
- Criar uma branch no repositório com o formato nome-sobrenome (Exemplo: daniel-muller);
- **Conferir se a API desejada já não foi escolhida por algum colega**;
- Subir o trabalho na branch com um readme.md, documentando detalhes sobre como a avaliação foi desenvolvida, dificuldades conhecidas e como utilizar o sistema;
- O prazo de entrega é até às 12h do dia 19/12/2022 no repositório do github (https://github.com/Compass-pb-aws-2022-IFCE/sprint-2-pb-aws-ifce).

---
---
