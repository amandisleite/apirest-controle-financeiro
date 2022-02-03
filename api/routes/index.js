const bodyParser = require("body-parser");

const receitas = require("./receitasRoute");
const despesas = require("./despesasRoute");
const geral = require("./geralRoute");
const usuarios = require("./usuariosRoute");

const errors = require("../middlewares/tratamentoDeErro")

module.exports = app => {
    
    app.use(bodyParser.json());

    app.use(receitas,
            despesas,
            geral,
            usuarios,
            errors);
}
