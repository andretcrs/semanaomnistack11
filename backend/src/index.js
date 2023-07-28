const express = require("express");

const cors = require("cors"); // importar mode de segurança

const routes = require("./routes");

const app = express();

app.use(cors());

app.use(express.json()); // informando que o uso json para o corpo das requisições para fazer a conversão em objeto do javascript

app.use(routes);

app.listen(3333); // mandar ouvir a porta da aplicação para rodar local

//porta back-end http://localhost:3333

// porta frontend : http://localhost:3000
