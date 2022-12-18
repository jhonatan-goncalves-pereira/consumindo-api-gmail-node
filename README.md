# consumindo API GMAL com NODE JS

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



## PREPARANDO AMBIENTE

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

## SOBRE A API 

[LINK DA API do GMAIL](https://developers.google.com/gmail/api/ )

A documentação da API segue o link



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
