const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3008;

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));