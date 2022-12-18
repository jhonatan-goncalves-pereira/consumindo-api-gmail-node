const express = require('express');

const server = express();

//informa ao server que usará json
server.use(express.json());

//atribui a porta ao server
server.listen(8000);

// teste usando rotas
server.get("/",(req,res) => {
    return res.send({message:"Hello, World of Jhonatan Gonçalves Pereira"})
})