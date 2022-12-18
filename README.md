# consumindo API GMAL com NODE JS

para continuar você presirá verificar se possuí instalados no seu ambiente:
- npm
- yarn
- node
- express

## Se já possue instalados pule essa parte
Para instalação do Node siga o Link 
https://nodejs.org/en/download/

Para instalação do Yarn execute 
npm install --global yarn

Se ao tentar verificar a versão tiver erros como o
- AppData\Roaming\npm\yarn.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em https://go.microsoft.com/fwlink/?LinkID=135170.
-- Acesse aqui: https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%c3%a7%c3%a3o-de-scripts-foi-desabilitada-neste-sistema

Se após isso ao executar o erro persistir e mostrar isso:
AppData\Roaming\npm\yarn.ps1 não pode ser carregado. O arquivo C:\Users\jhona\AppData\Roaming\npm\yarn.ps1 não está assinado 
digitalmente. Não é possível executar este script no sistema atual. Para obter mais informações sobre como executar scripts e definir a política de execução,     
consulte about_Execution_Policies at https://go.microsoft.com/fwlink/?LinkID=135170.
tente o descrito aqui:
https://lilinguas.com/erro-powershell-o-ficheiro-n%C3%A3o-est%C3%A1-assinado-digitalmente/

https://lilinguas.com/erro-powershell-o-ficheiro-n%C3%A3o-est%C3%A1-assinado-digitalmente/

## PREPARANDO AMBIENTE
comando yarn init -y
- cria o package.json

acesse o Express, caso ainda não tenha instalado use:  yarn add express
- usado para criar rotas


- crie o index.js para importar o express e adicione o código

- para testar abra o diretório no terminal e insira o node index.js

- aí só abrir o navegador na porta pra ver o servidor rodando

- instale o nodemon com o comando no terminal
-- abra um novo terminal ou pare com Ctrl + C a execução do servidor

- yarn add nodemon -D
que serve para restart após todas as alterações do arquivo e teclado ctrl + S

- agora vá em package.json e set no arquivo 
"scripts":{
    "start":"nodemon index.js"
}

adicionado no package.json agora para acesso use o yarn start em vez de node index.js


- criando rota para testar, adicione no index.js: 
use: server.get('/', (req, res)=>{
    return res.send({message:"Hello, World of Jhonatan Gonçalves Pereira!"})
});

salve e abra no navegador pela porta usada, aqui no caso a porta 8000, se deu erro troque a porta no arquivo index.js, pois o erro é por provalvelmente a porta já está sendo usada.

para a visualização no Edge será diferente
## SOBRE A API 
LINK DA API do GMAIL

A documentação da API segue o link
-- https://developers.google.com/gmail/api/     
---



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
